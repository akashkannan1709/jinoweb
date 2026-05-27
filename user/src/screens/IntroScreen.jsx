import RoundedCard from "../components/RoundedCard";
import PrimaryButton from "../components/PrimaryButton";

const IntroScreen = ({ onGetStarted }) => {
  return (
    <div className="onboarding-screen bg-[#09b458]">
      <div className="onboarding-mobile-frame">
        <div className="onboarding-intro-hero flex items-center justify-center pb-2 pt-0">
          <div className="onboarding-intro-image-shell">
            <img
              src="/onboarding/intro-turf.png"
              alt="Isometric turf ground"
              className="onboarding-intro-image"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </div>
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

            <h1 className="onboarding-title onboarding-title-welcome max-w-[22rem] text-[#374151]">
              PREMIUM TURF
              <br />
              EXPERIENCE
              <br />
              AT OUR PAMBAN
            </h1>

            <PrimaryButton onClick={onGetStarted} className="onboarding-action onboarding-centered-button w-full max-w-[19.75rem]">
              Get Started
            </PrimaryButton>

            <div className="onboarding-dots mt-auto pt-10">
              <span className="onboarding-dot" />
              <span className="onboarding-dot onboarding-dot-active" />
            </div>
          </div>
        </RoundedCard>
      </div>
    </div>
  );
};

export default IntroScreen;
