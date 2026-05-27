import RoundedCard from "../components/RoundedCard";
import PrimaryButton from "../components/PrimaryButton";

const SplashScreen = ({ onContinue }) => {
  return (
    <div className="onboarding-screen bg-[#09b458]">
      <div className="onboarding-mobile-frame">
        <div className="onboarding-image-wrap onboarding-hero-panel">
          <img
            src="/onboarding/splash-kids.png"
            alt="Kids playing football"
            className="h-full w-full object-cover object-center"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </div>

        <RoundedCard className="onboarding-card onboarding-bottom-card flex min-h-0 flex-1">
          <div className="mx-auto flex w-full max-w-[22rem] flex-1 flex-col items-center text-center">
            <div className="onboarding-logo-row flex items-center justify-center gap-4">
              <img
                src="/onboarding/j4-logo.png"
                alt="J4 logo"
                className="onboarding-logo rounded-[14px] object-cover shadow-[0_8px_18px_rgba(22,163,74,0.16)]"
                loading="eager"
                decoding="async"
              />
              <span className="onboarding-brand text-[#374151]">Arena</span>
            </div>

            <h1 className="onboarding-title onboarding-title-splash text-[#374151]">
              YOUR PERFECT GAME
              <br />
              STARTS HERE
            </h1>

            <PrimaryButton onClick={onContinue} className="onboarding-action onboarding-centered-button w-full max-w-[19.75rem]">
              Continue
            </PrimaryButton>

            <div className="onboarding-dots mt-auto pt-10">
              <span className="onboarding-dot onboarding-dot-active" />
              <span className="onboarding-dot" />
            </div>
          </div>
        </RoundedCard>
      </div>
    </div>
  );
};

export default SplashScreen;
