import type { ReactNode } from "react";
import { useCallback, useEffect, } from "react";
import { Settings } from "../types";

// import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { Settings } from "@/types";
// import { SplashScreen } from "@/components";
// import { LogoSsoAdmin } from "@/asset/logo-sso-admin";

interface AuthProviderProps {
  children: ReactNode;
  handleTheme: (settings: Settings) => void;
}

export function AuthInitializer(props: AuthProviderProps): JSX.Element {
  // const [isInitialized, setIsInitialized] = useState(true);

  // const {
  //   auth: {
  //     refreshToken,
  //     accessToken,
  //     user: { userId },
  //   },
   
  // }: any = useSelector(
  //   (state: { auth: any; loginAs: { loginAs?: string } }) => state
  // );
  // const [mutation, { isLoading }] = useAuthMeMutation();
  const { children, handleTheme } = props;
  // const dispatch = useDispatch();
  console.log(handleTheme)

  const initialize = useCallback(async (): Promise<void> => {
    // if (accessToken && refreshToken) {
    //   try {
    //     await mutation({ userId, refreshToken }).unwrap();
    //   } catch (error) {
    //     toast.error(error?.data?.message || "Something Went Wrong");
    //       dispatch(authActions.logout());
    //   }
    // } else {
    //    dispatch(authActions.logout());
    // }
    // setIsInitialized(true);
  }, []);

  useEffect(() => {
    // void initialize();
  }, [initialize]);

  useEffect(() => {
    // handleTheme({
    //   disableButtonsOnLoginAs: Boolean(),
    // });
  }, []);

  // if (isInitialized) {
  //   return (
  //     <SplashScreen>
  //       <LogoSsoAdmin />
  //     </SplashScreen>
  //   );
  // }

  return <>{children}</>;
}
