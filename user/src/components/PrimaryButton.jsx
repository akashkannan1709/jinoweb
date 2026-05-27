const PrimaryButton = ({ children, className = "", ...props }) => {
  return (
    <button
      type="button"
      className={`min-h-[64px] rounded-full bg-[#19b04b] px-10 py-4 text-center text-lg font-semibold leading-none text-white shadow-[0_12px_24px_rgba(25,176,75,0.24)] transition-transform duration-200 active:scale-[0.98] ${className}`}
      {...props}
    >
      <span className="onboarding-button-label">{children}</span>
    </button>
  );
};

export default PrimaryButton;
