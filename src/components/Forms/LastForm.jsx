import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CommonTextField from "../ui/CommonTextField";
import { Grid, Typography } from "@mui/material";
import AppButton from "../ui/Appbutton";
import { useSelector } from "react-redux";
import AutoComplete from "../ui/AutoComplete";
import axios from "axios";
function LastForm(props) {
  const data = props.newData;
  const [loading, setLoading] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const formData = useSelector((state) => state.formData.formData);
  const handleNextStep = props.handleNextStep;
  const handlePreviousStep = props.handlePreviousStep;
  const handleSetFormData = props.handleSetFormData;

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.countrystatecity.in/v1/countries", {
        headers: {
          "X-CSCAPI-KEY":
            "NW9mWVE4dXlWYkkzUzZpU0c0OVk4bVB5OXVHN28yRnhkbGFkdFd3Qw==",
        },
      })
      .then((response) => {
        console.log(response.data);
        setOptions(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const formik = useFormik({
    validateOnChange: true,
    initialValues: {
      hobby: (data && data.hobby) || "",
      skills: (data && data.skills) || [""],
      accountType: (data && data.accountType) || "",
    },
    validationSchema: Yup.object({
      hobby: Yup.string().required("Hobby is required"),
      skills: Yup.array().of(Yup.string().required("Skill is required")),
      accountType: Yup.string().required("Account Type  is required"),
    }),
    onSubmit: (values) => {
      handleNextStep(true);
      handleSetFormData({ ...formData, ...values });
    },
  });
  console.log(formik.errors);
  const accountType = [
    {
      id: "SAVING",
      label: "SAVING",
    },
    {
      id: "CURRENT",
      label: "CURRENT",
    },
  ];
  const handleOnChange = (event, selectedOption) => {
    const newValue = selectedOption ? selectedOption.id : "";
    formik.setFieldValue("accountType", newValue); // Update the formik field value
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="h-full">
        <Grid container spacing={2} justifyContent="start">
          <Grid item xs={12} sm={12} md={12} justifySelf="start">
            <Typography variant="h6" gutterBottom>
              Hobby and Skills
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <CommonTextField
                  name="hobby"
                  id="hobby"
                  type="text"
                  label={"Hobby"}
                  fullWidth
                  value={formik.values.hobby}
                  onChange={formik.handleChange}
                  error={!!formik.touched.hobby && formik.errors?.hobby}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Grid container spacing={2}>
                  {formik.values.skills.map((skill, index) => (
                    <Grid item xs={12} sm={12} md={12} key={index}>
                      <CommonTextField
                        name={`skills.${index}`}
                        id={`skills-${index}`}
                        type="text"
                        label={"Skill"}
                        fullWidth
                        value={skill}
                        onChange={(e) => {
                          const newSkills = [...formik.values.skills];
                          newSkills[index] = e.target.value;
                          formik.setFieldValue("skills", newSkills);
                        }}
                        error={
                          !!formik.touched.skills?.[index] &&
                          formik.errors?.skills?.[index]
                        }
                        onBlur={formik.handleBlur}
                        rightIcon={
                          formik.values.skills.length > 1 && (
                            <AppButton
                              type="button"
                              text="X"
                              color="error"
                              className={
                                "!px-[0px] !py-0 min-w-0 !max-w-max !mt-0 !bg-white !shadow-none !text-black"
                              }
                              onClick={() => {
                                const newSkills = [...formik.values.skills];
                                newSkills.splice(index, 1);
                                formik.setFieldValue("skills", newSkills);
                              }}
                            />
                          )
                        }
                      />
                    </Grid>
                  ))}
                  <Grid item xs={12} sm={12} md={12}>
                    <AppButton
                      type="button"
                      text="Add Skill"
                      color="primary"
                      onClick={() => {
                        formik.setFieldValue("skills", [
                          ...formik.values.skills,
                          "",
                        ]);
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <AutoComplete
                  loading={loading}
                  name="accountType"
                  label="Select your AccountType"
                  value={formik.values.accountType}
                  onChange={(name, value) => formik.setFieldValue(name, value)} // Use formik.setFieldValue
                  error={
                    formik.touched.accountType && formik.errors.accountType
                  }
                  options={options}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="flex items-center justify-between">
          <AppButton
            type={"button"}
            text={"Back"}
            color={"primary"}
            onClick={handlePreviousStep}
          />
          <AppButton
            type={"submit"}
            text={"Next"}
            color={"primary"}
            className={""}
          />
        </div>
      </form>
    </>
  );
}

export default LastForm;
