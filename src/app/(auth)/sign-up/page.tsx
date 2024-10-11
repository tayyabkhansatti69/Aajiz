"use client";
// import { HcmCard } from "@/sections/appsite/auth/hcm-card";
// import ParentSignupForm from "@/sections/appsite/auth/sign-up-form/parent-signup-form/Parent-signup-form";
// import StudentSignupFrom from "@/sections/appsite/auth/sign-up-form/student-signup-form/student-signup-from";
// import TeacherSignupForm from "@/sections/appsite/auth/sign-up-form/teacher-signup-form";
import { HcmCard } from "@/src/sections/appsite/auth/hcm-card";
import ParentSignupForm from "@/src/sections/appsite/auth/sign-up-form/parent-signup-form/Parent-signup-form";
import StudentSignupFrom from "@/src/sections/appsite/auth/sign-up-form/student-signup-form/student-signup-from";
import TeacherSignupForm from "@/src/sections/appsite/auth/sign-up-form/teacher-signup-form";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function SignUp() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const [hcmCardData, setHcmCardData] = useState([]);
  const roleRenderComponent = (role: string | undefined| null) => {
    switch (role) {
      case "Student":
        return (
          <>
            <StudentSignupFrom/>
          </>
        );
      case "Teacher":
        return (
          <>
            <TeacherSignupForm/>
          </>
        );
      case "Parent":
        return (
          <>
            <ParentSignupForm/>
          </>
        );
    
      default:
        return <>
        <HcmCard setHcmCardData={setHcmCardData} hcmCardDatamain={hcmCardData}/>
        
        </>;
    }
  };
  return (
    <>
    {roleRenderComponent(role)}
    </>
  );
}

export default SignUp;
