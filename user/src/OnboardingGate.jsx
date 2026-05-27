import { useEffect, useState } from "react";
import LaunchSplashScreen from "./screens/LaunchSplashScreen";
import SplashScreen from "./screens/SplashScreen";
import IntroScreen from "./screens/IntroScreen";
import { safeStorage } from "./utils/safeStorage";

const ONBOARDING_COMPLETE_KEY = "j4turf:onboarding:v2:complete";
const LEGACY_VISITED_STORAGE_KEY = "visited";
const LAUNCH_SPLASH_DURATION = 3000;

const OnboardingGate = ({ children }) => {
  const [stage, setStage] = useState("loading");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const isFirstTime =
        safeStorage.getItem(ONBOARDING_COMPLETE_KEY) !== "true";
      setStage(isFirstTime ? "splash" : "app");
    }, LAUNCH_SPLASH_DURATION);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (stage === "app") {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [stage]);

  if (stage === "loading") {
    return <LaunchSplashScreen />;
  }

  if (stage === "splash") {
    return (
      <div className="onboarding-stage">
        <SplashScreen onContinue={() => setStage("intro")} />
      </div>
    );
  }

  if (stage === "intro") {
    return (
      <div className="onboarding-stage">
        <IntroScreen
          onGetStarted={() => {
            safeStorage.setItem(ONBOARDING_COMPLETE_KEY, "true");
            safeStorage.removeItem(LEGACY_VISITED_STORAGE_KEY);
            setStage("app");
          }}
        />
      </div>
    );
  }

  return children;
};

export default OnboardingGate;
