"use client";

import { SplashScreen } from "@/src/components";
import SignInForm from "@/src/sections/appsite/auth/sign-in-form/signInForm";
import { useEffect, useState } from "react";
import SplashScree from "@/src/assets/gif/Flow 6@1x-25fps.gif";

function SignIn() {
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
          <img src={SplashScree?.src} alt="Loading..." style={{ width: '530px', height: 'auto' }} />
        </SplashScreen>
        :
        <>
        <SignInForm />
        </>
        }
    </>
  );
}

export default SignIn;
