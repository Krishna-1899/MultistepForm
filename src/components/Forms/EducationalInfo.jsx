// import { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import CommonTextField from "../ui/CommonTextField";
// import { Grid } from "@mui/material";
// import AppButton from "../ui/Appbutton";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";

// function EducationalInfo(props) {
//   const data = props.newData.educations || [
//     { institution: "", degree: "", fieldOfStudy: "", graduationYear: "" },
//   ];
//   console.log("data", data);
//   const handleNextStep = props.handleNextStep;
//   const handlePreviousStep = props.handlePreviousStep;

//   const [educations, setEducations] = useState(data.educations || []);

//   const handleAddEducation = () => {
//     setEducations([
//       ...educations,
//       { institution: "", degree: "", fieldOfStudy: "", graduationYear: "" },
//     ]);
//   };

//   const handleRemoveEducation = (index) => {
//     const newEducations = educations.filter((_, i) => i !== index);
//     setEducations(newEducations);
//   };

//   const handleSaveEducation = (index) => {
//     const newEducations = [...educations];
//     newEducations[index] = { ...newEducations[index], isSaved: true };
//     setEducations(newEducations);
//   };

//   const formik = useFormik({
//     validateOnChange: true,
//     initialValues: { educations },
//     validationSchema: Yup.object({
//       educations: Yup.array().of(
//         Yup.object().shape({
//           institution: Yup.string()
//             .max(100, "Must be 100 characters or less")
//             .required("Required"),
//           degree: Yup.string()
//             .max(50, "Must be 50 characters or less")
//             .required("Required"),
//           fieldOfStudy: Yup.string()
//             .max(50, "Must be 50 characters or less")
//             .required("Required"),
//           graduationYear: Yup.number()
//             .min(1900, "Must be a valid year")
//             .max(new Date().getFullYear(), "Cannot be in the future")
//             .required("Required"),
//         })
//       ),
//     }),
//     onSubmit: (values) => {
//       handleNextStep({ educations: values.educations }, props.final);
//     },
//   });

//   return (
//     <>
//       <form onSubmit={formik.handleSubmit} className="h-full">
//         {educations.map((education, index) => (
//           <Card key={index} className="mb-4">
//             <CardContent>
//               <Grid container spacing={2} justifyContent="start">
//                 <Grid item xs={12} sm={12} md={12} justifySelf="start">
//                   <CommonTextField
//                     name={`educations.${index}.institution`}
//                     id={`institution-${index}`}
//                     type="text"
//                     label={`Institution`}
//                     fullWidth
//                     value={education.institution || ""}
//                     onChange={(e) => {
//                       // const newEducations = [...educations];
//                       // newEducations[index].institution = e.target.value;
//                       // setEducations(newEducations);
//                       formik.handleChange(e);
//                     }}
//                     error={
//                       !!formik.touched.educations?.[index]?.institution &&
//                       formik.errors.educations?.[index]?.institution
//                     }
//                     onBlur={formik.handleBlur}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={12} justifySelf="start">
//                   <CommonTextField
//                     name={`educations.${index}.degree`}
//                     id={`degree-${index}`}
//                     type="text"
//                     label={`Degree`}
//                     fullWidth
//                     value={education.degree || ""}
//                     onChange={(e) => {
//                       const newEducations = [...educations];
//                       newEducations[index].degree = e.target.value;
//                       setEducations(newEducations);
//                       formik.handleChange(e);
//                     }}
//                     error={
//                       !!formik.touched.educations?.[index]?.degree &&
//                       formik.errors.educations?.[index]?.degree
//                     }
//                     onBlur={formik.handleBlur}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={12} justifySelf="start">
//                   <CommonTextField
//                     name={`educations.${index}.fieldOfStudy`}
//                     id={`fieldOfStudy-${index}`}
//                     type="text"
//                     label={`Field of Study`}
//                     fullWidth
//                     value={education.fieldOfStudy || ""}
//                     onChange={(e) => {
//                       const newEducations = [...educations];
//                       newEducations[index].fieldOfStudy = e.target.value;
//                       setEducations(newEducations);
//                       formik.handleChange(e);
//                     }}
//                     error={
//                       !!formik.touched.educations?.[index]?.fieldOfStudy &&
//                       formik.errors.educations?.[index]?.fieldOfStudy
//                     }
//                     onBlur={formik.handleBlur}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={12} justifySelf="start">
// <CommonTextField
//   name={`educations.${index}.graduationYear`}
//   id={`graduationYear-${index}`}
//   type="number"
//   label={`Graduation Year`}
//   fullWidth
//   value={education.graduationYear || ""}
//   onChange={(e) => {
//     const newEducations = [...educations];
//     newEducations[index].graduationYear = e.target.value;
//     setEducations(newEducations);
//     formik.handleChange(e);
//   }}
//   error={
//     !!formik.touched.educations?.[index]?.graduationYear &&
//     formik.errors.educations?.[index]?.graduationYear
//   }
//   onBlur={formik.handleBlur}
// />
//                 </Grid>
//                 <Grid item xs={12} sm={12} md={12} justifySelf="end">
//                   <AppButton
//                     type="button"
//                     text="Save"
//                     color="primary"
//                     onClick={() => handleSaveEducation(index)}
//                   />
//                 </Grid>
//                 {educations.length > 1 && (
//                   <Grid item xs={12} sm={12} md={12} justifySelf="end">
//                     <AppButton
//                       type="button"
//                       text="Remove"
//                       color="secondary"
//                       onClick={() => handleRemoveEducation(index)}
//                     />
//                   </Grid>
//                 )}
//               </Grid>
//             </CardContent>
//           </Card>
//         ))}
//         <AppButton
//           type="button"
//           text="Add Education"
//           color="primary"
//           onClick={handleAddEducation}
//         />
//         <div className="flex items-center justify-between mt-4">
//           <AppButton
//             type="button"
//             text="Back"
//             color="primary"
//             onClick={handlePreviousStep}
//           />
//           <AppButton type="submit" text="Next" color="primary" className="" />
//         </div>
//       </form>
//     </>
//   );
// }

// export default EducationalInfo;
import React from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import CommonTextField from "../ui/CommonTextField";
import { Grid } from "@mui/material";
import AppButton from "../ui/Appbutton";
import toast from "react-hot-toast";
import { setFormData } from "../../slices/formslice";
// import { saveEducation } from "./educationSlice";

const EducationalInfo = (props) => {
  const dispatch = useDispatch();
  const data = props.newData;
  const handleNextStep = props.handleNextStep;
  const handlePreviousStep = props.handlePreviousStep;
  const formData = useSelector((state) => state.formData.formData);
  const validationSchema = Yup.object({
    educations: Yup.array()
      .of(
        Yup.object().shape({
          instituteName: Yup.string().required("Institute name is required"),
          startYear: Yup.number()
            .required("Start year is required")
            .min(1900, "Invalid year")
            .max(new Date().getFullYear(), "Invalid year"),
          endYear: Yup.number()
            .required("End year is required")
            .min(Yup.ref("startYear"), "End year cannot be before start year")
            .max(new Date().getFullYear(), "Invalid year"),
          fieldOfStudy: Yup.string().required("Field of study is required"),
          degree: Yup.string().required("Degree field is required"),
          iAmStillEnrolled: Yup.string().optional(),
        })
      )
      .min(1, "At least one education entry is required"),
  });

  const formik = useFormik({
    initialValues: {
      educations: data.educations || [
        {
          instituteName: "",
          startYear: "",
          endYear: "",
          fieldOfStudy: "",
          degree: "",
          iAmStillEnrolled: "",
        },
      ],
    },
    // validationSchema,
    onSubmit: (values) => {
      dispatch(setFormData({ ...formData, educations: values.educations }));
      // alert("Education details saved!");
      handleNextStep(false);
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <FieldArray name="educations">
          {({ push, remove }) => (
            <div className="">
              {formik.values.educations.map((_, index) => (
                <div
                  key={index}
                  className="card my-10 p-4 shadow-[10px_20px_8px_rgba(0,0,0,0.15)] rounded-md border-[1px] border-black"
                >
                  <h4>Education Detail {index + 1}</h4>
                  <Grid container spacing={2} justifyContent="start">
                    <Grid item xs={12} sm={12} md={6} justifySelf="start">
                      <CommonTextField
                        name={`educations[${index}].instituteName`}
                        // id={`graduationYear-${index}`}
                        value={formik.values.educations[index].instituteName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        label={`Institute Name`}
                        fullWidth
                        error={
                          !!formik.touched.educations?.[index]?.instituteName &&
                          formik.errors.educations?.[index]?.instituteName
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} justifySelf="start">
                      <CommonTextField
                        name={`educations[${index}].startYear`}
                        value={formik.values.educations[index].startYear}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        label={`Start Year`}
                        fullWidth
                        type="number"
                        error={
                          !!formik.touched.educations?.[index]?.startYear &&
                          formik.errors.educations?.[index]?.startYear
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} justifySelf="start">
                      <CommonTextField
                        name={`educations[${index}].endYear`}
                        value={formik.values.educations[index].endYear}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        label={`End Year`}
                        fullWidth
                        type="number"
                        error={
                          !!formik.touched.educations?.[index]?.endYear &&
                          formik.errors.educations?.[index]?.endYear
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} justifySelf="start">
                      <CommonTextField
                        name={`educations[${index}].degree`}
                        value={formik.values.educations[index].degree}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        label={`Degree`}
                        fullWidth
                        error={
                          !!formik.touched.educations?.[index]?.degree &&
                          formik.errors.educations?.[index]?.degree
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} justifySelf="start">
                      <CommonTextField
                        name={`educations[${index}].fieldOfStudy`}
                        value={formik.values.educations[index].fieldOfStudy}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        label={`Field of Study`}
                        fullWidth
                        error={
                          !!formik.touched.educations?.[index]?.fieldOfStudy &&
                          formik.errors.educations?.[index]?.fieldOfStudy
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} justifySelf="start">
                      <CommonTextField
                        name={`educations[${index}].iAmStillEnrolled`}
                        value={formik.values.educations[index].iAmStillEnrolled}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        label={`I am still enrolled?`}
                        fullWidth
                        error={
                          !!formik.touched.educations?.[index]
                            ?.iAmStillEnrolled &&
                          formik.errors.educations?.[index]?.iAmStillEnrolled
                        }
                      />
                    </Grid>
                  </Grid>
                  <AppButton
                    type={"button"}
                    onClick={() => {
                      if (index > 0) {
                        remove(index);
                      } else {
                        toast.error("At least one education is Required");
                      }
                    }}
                    text={"Remove"}
                    className="!bg-red-700 !text-white !py-[2px] !text-[12px] !px-2 "
                    color={"red"}
                  />
                </div>
              ))}
              <AppButton
                type={"button"}
                text={"Add Education"}
                className="!bg-green-600"
                onClick={() =>
                  push({
                    instituteName: "",
                    startYear: "",
                    endYear: "",
                    fieldOfStudy: "",
                    degree: "",
                    iAmStillEnrolled: "",
                  })
                }
              />
            </div>
          )}
        </FieldArray>
        <div className="flex items-center justify-between">
          <AppButton
            type={"button"}
            text={"Back"}
            onClick={handlePreviousStep}
          />
          <AppButton type={"submit"} text={"Next"} />
        </div>
      </form>
    </FormikProvider>
  );
};

export default EducationalInfo;
