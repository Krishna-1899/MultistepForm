import { useFormik } from "formik";
import * as Yup from "yup";
import CommonTextField from "../ui/CommonTextField";
import { Grid } from "@mui/material";
import AppButton from "../ui/Appbutton";
import { useSelector } from "react-redux";
function ContactInfo(props) {
  const data = props.newData;
  const formData = useSelector((state) => state.formData.formData);
  const handleNextStep = props.handleNextStep;
  const handlePreviousStep = props.handlePreviousStep;
  const handleSetFormData = props.handleSetFormData;
  const formik = useFormik({
    validateOnChange: true,
    initialValues: {
      phoneNumber: (data && data.phoneNumber) || "",
      address: (data && data.address) || "",
      zipCode: (data && data.zipCode) || "",
      city: (data && data.city) || "",
      state: (data && data.state) || "",
    },
    // validationSchema: Yup.object({
    //   phoneNumber: Yup.string()
    //     .required("Phone Number Is Required")
    //     .matches(
    //       /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,
    //       "Phone number is not valid"
    //     )
    //     .min(10, "Phone number is not valid")
    //     .max(10, "Phone number is not valid"),
    //   address: Yup.string()
    //     .max(200, "Must be 200 characters or less")
    //     .required("Required"),
    //   zipCode: Yup.number().typeError("Must be a number").required("Required"),
    //   city: Yup.string().required("Required"),
    //   state: Yup.string().required("Required"),
    // }),
    onSubmit: (values) => {
      handleNextStep(false);
      handleSetFormData({ ...formData, ...values });
    },
  });
  console.log(formik.errors);
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="h-full">
        <Grid container spacing={2} justifyContent="start">
          <Grid item xs={12} sm={12} md={12} justifySelf="start">
            <CommonTextField
              name="address"
              id="address"
              multiline
              rows={3}
              label={"Address"}
              fullWidth
              value={formik.values.address}
              onChange={formik.handleChange}
              error={!!formik.touched.address && formik.errors?.address}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} justifySelf="start">
            <CommonTextField
              name="zipCode"
              id="zipCode"
              type="number"
              label={"Zip Code"}
              fullWidth
              value={formik.values.zipCode}
              onChange={formik.handleChange}
              error={!!formik.touched.zipCode && formik.errors?.zipCode}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} justifySelf="  start">
            <CommonTextField
              name="city"
              id="city"
              type="text"
              label={"City"}
              fullWidth
              value={formik.values.city}
              onChange={formik.handleChange}
              error={!!formik.touched.city && formik.errors?.city}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} justifySelf="  start">
            <CommonTextField
              name="state"
              id="state"
              type="text"
              label={"State"}
              fullWidth
              value={formik.values.state}
              onChange={formik.handleChange}
              error={!!formik.touched.state && formik.errors?.state}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} justifySelf="start">
            <CommonTextField
              name="phoneNumber"
              id="phoneNumber"
              type="number"
              label={"Phone Number"}
              fullWidth
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              error={!!formik.touched.phoneNumber && formik.errors?.phoneNumber}
              onBlur={formik.handleBlur}
            />
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

export default ContactInfo;
