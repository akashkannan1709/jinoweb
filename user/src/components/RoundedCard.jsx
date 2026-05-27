const RoundedCard = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-[42px] bg-[#FFFFFF] px-7 pb-8 pt-7 shadow-[0_10px_28px_rgba(15,23,42,0.10)] ${className}`}
    >
      {children}
    </div>
  );
};

export default RoundedCard;
