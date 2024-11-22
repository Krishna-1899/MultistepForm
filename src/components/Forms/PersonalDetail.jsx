import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CommonTextField from "../ui/CommonTextField";
import { Grid } from "@mui/material";
import AppButton from "../ui/Appbutton";
import { useSelector } from "react-redux";
function PersonalDetail(props) {
  const data = props.newData;
  const handleNextStep = props.handleNextStep;
  const handleSetFormData = props.handleSetFormData;
  const formData = useSelector((state) => state.formData.formData);
  const formik = useFormik({
    validateOnChange: true,
    initialValues: {
      firstName: (data && data.firstName) || "",
      lastName: (data && data.lastName) || "",
      dateOfBirth: (data && data.dateOfBirth) || null,
      email: (data && data.email) || "",
    },
    // validationSchema: Yup.object({
    //   firstName: Yup.string()
    //     .max(15, "Must be 15 characters or less")
    //     .required("Required"),
    //   lastName: Yup.string()
    //     .max(20, "Must be 20 characters or less")
    //     .required("Required"),
    //   email: Yup.string().email("Invalid email address").required("Required"),
    //   dateOfBirth: Yup.date().required("Required"),
    // }),
    onSubmit: (values) => {
      handleNextStep(false);
      handleSetFormData({ ...formData, ...values });
    },
  });
  console.log(formik.errors);
  console.log("formik touched", formik.touched.firstName);
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="h-full">
        <Grid container spacing={2} justifyContent="start">
          <Grid item xs={12} sm={6} md={6} justifySelf="start">
            <CommonTextField
              name="firstName"
              id="firstName"
              type="text"
              label={"First Name"}
              fullWidth
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={!!formik.touched.firstName && formik.errors?.firstName}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} justifySelf="start">
            <CommonTextField
              name="lastName"
              id="lastName"
              type="text"
              label={"Last Name"}
              fullWidth
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={!!formik.touched.lastName && formik.errors?.lastName}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} justifySelf="start">
            <CommonTextField
              name="email"
              id="email"
              type="email"
              label={"Email"}
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={!!formik.touched.email && formik.errors?.email}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} justifySelf="start">
            <CommonTextField
              name="dateOfBirth"
              id="dateOfBirth"
              type="date"
              label={"Date of Birth"}
              fullWidth
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
              error={!!formik.touched.dateOfBirth && formik.errors?.dateOfBirth}
              onBlur={formik.handleBlur}
              InputLabelProps={{ shrink: true }}
              size="small"
            />
          </Grid>
        </Grid>
        <AppButton
          type={"submit"}
          text={"Next"}
          color={"primary"}
          className={""}
        />
      </form>
    </>
  );
}

export default PersonalDetail;
