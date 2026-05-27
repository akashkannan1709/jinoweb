const LaunchSplashScreen = () => {
  return (
    <div className="launch-splash-screen" aria-label="J4 Arena Booking">
      <img
        src="/onboarding/launch-splash.jpg"
        alt="J4 Arena Booking"
        className="launch-splash-image"
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />
    </div>
  );
};

export default LaunchSplashScreen;
