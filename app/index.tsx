import { useState, useEffect } from "react";
import SplashScreen from "./splashscreen";
import { useRouter } from "expo-router";

export default function Index() {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
      // router.replace("/components/imagepicker");
      router.replace("./beranda");
    }, 0);
  }, []);

  return <>{isShowSplash ? <SplashScreen /> : null}</>;
}
