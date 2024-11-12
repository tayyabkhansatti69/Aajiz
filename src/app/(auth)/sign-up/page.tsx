"use client";

import { SplashScreen } from "@/src/components";
import SignUpForm from "@/src/sections/appsite/auth/sign-up-form/signupForm";
import SplashScree from "@/src/assets/gif/Flow 6@1x-25fps.gif";
import { useEffect, useState } from "react";
function SignUp() {
  const [isSplashComplete, setIsSplashComplete] = useState(true);

  useEffect(() => {
    // Hide the GIF after 6 seconds and trigger onComplete callback
    const timer = setTimeout(() => {
      setIsSplashComplete(false);

    }, 6000);

    return () => clearTimeout(timer);
  }, [isSplashComplete]);

  return (
    <>
      {isSplashComplete ?
        <SplashScreen>
          <img src={SplashScree?.src} alt="Loading..." style={{ width: '100%', height: '100%' }} />
        </SplashScreen>
        :
   <SignUpForm/>
      }
    </>
  );
}

export default SignUp;
