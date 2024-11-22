import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CommonTextField from "../components/ui/CommonTextField";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PersonalDetail from "../components/Forms/PersonalDetail";
import ContactInfo from "../components/Forms/ContactInfo";
import EducationalInfo from "../components/Forms/EducationalInfo";
import { setFormData, setStepNumber, setLoading } from "../slices/formslice";
import { TiTick } from "react-icons/ti";
import { MdArrowForwardIos } from "react-icons/md";
import toast from "react-hot-toast";
import LastForm from "../components/Forms/LastForm";
function MultiStepForm() {
  const dispatch = useDispatch();
  const stepNumber = useSelector((state) => state.formData.stepNumber);
  const formData = useSelector((state) => state.formData.formData);
  console.log(formData);
  console.log(stepNumber);
  const handleNextStep = (final = false) => {
    // dispatch(setFormData({ ...formData, ...newData }));
    if (final) {
      toast.success("Form submitted successfully");
    } else {
      dispatch(setStepNumber(stepNumber + 1));
    }
  };
  const handleSetFormData = (data) => {
    dispatch(setFormData(data));
  };
  const handlePreviousStep = () => {
    dispatch(setStepNumber(stepNumber - 1));
    dispatch(setFormData({ ...formData }));
  };
  const steps = [
    {
      title: "Personal Details",
      component: (
        <PersonalDetail
          handleNextStep={handleNextStep}
          newData={formData}
          handleSetFormData={handleSetFormData}
        />
      ),
    },
    {
      title: "Contact Details",
      component: (
        <ContactInfo
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          newData={formData}
          handleSetFormData={handleSetFormData}
        />
      ),
    },
    {
      title: "Educational Details",
      component: (
        <EducationalInfo
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          handleSetFormData={handleSetFormData}
          newData={formData}
          final={true}
        />
      ),
    },
    {
      title: "Final",
      component: (
        <LastForm
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          handleSetFormData={handleSetFormData}
          newData={formData}
          final={true}
        />
      ),
    },
  ];
  return (
    <>
      <div className="flex justify-center max-w-2xl mx-auto w-full">
        {steps.map((step, index) => (
          <>
            <React.Fragment key={index}>
              <div className="flex flex-col w-full items-start ">
                {index === stepNumber ? (
                  <div className="flex  w-full items-center relative">
                    <div className="bg-blue-500 w-[30px]  rounded-full flex items-center justify-center">
                      <span className="text-white">{index + 1}</span>
                    </div>
                    <div
                      className={`${
                        index !== steps.length - 1 && index !== 3
                          ? "w-full h-[3px] rounded-full bg-blue-500 ml-1"
                          : ""
                      }`}
                    ></div>
                    <div className="absolute top-[100%] w-full">
                      {step.title}
                    </div>
                  </div>
                ) : index < stepNumber ? (
                  <div className="flex w-full items-center">
                    <div className="bg-green-500 w-[30px]  rounded-full flex items-center justify-center">
                      <TiTick color="white" size={22} />
                    </div>
                    <div
                      className={"w-full h-[3px] rounded-full bg-blue-500 ml-1"}
                    ></div>
                  </div>
                ) : (
                  <div
                    className={`${
                      index !== 3 ? "flex w-full items-center" : ""
                    }`}
                  >
                    <div className="bg-gray-500  w-[30px] rounded-full flex items-center justify-center opacity-50">
                      <span className="text-white">{index + 1}</span>
                    </div>
                    <div
                      className={`${
                        index !== steps.length - 1 && index !== 3
                          ? "w-full h-[3px] rounded-full bg-blue-500 ml-1"
                          : ""
                      }`}
                    ></div>
                  </div>
                )}
                {/* <div
                  className={`${
                    stepNumber === index ? "block" : " invisible "
                  } w-full`}
                >
                  {step.title}
                </div> */}
              </div>
            </React.Fragment>
            {/* <div
              className={`${
                index !== steps.length - 1
                  ? "w-[60px] h-[3px] rounded-full bg-blue-500 mt-[14px]"
                  : ""
              }`}
            ></div> */}
          </>
        ))}
        {/* <div className="flex justify-between  items-center">
          <div className="bg-blue-500 w-[30px] h-[30px] rounded-lg flex items-center justify-center">
            <TiTick color="white" size={22} />
          </div>
          <span>Personal Info</span>
        </div>
        <MdArrowForwardIos />
        <div className="flex justify-between items-center">
          <div className="bg-blue-500 w-[30px] h-[30px] rounded-lg flex items-center justify-center">
            <TiTick color="white" />
          </div>
          <span>Contact Info</span>
        </div>
        <MdArrowForwardIos />
        <div className="flex justify-between items-center">
          <div className="bg-blue-500 w-[30px] h-[30px] rounded-lg flex items-center justify-center ">
            <TiTick color="white" />
          </div>
          <span>Secure Info</span>
        </div> */}
      </div>
      <div className="max-w-screen-sm mx-auto content-center mt-8 ">
        {steps[stepNumber].component}
      </div>
    </>
  );
}

export default MultiStepForm;
