const Button = ({
  text,
  buttonColor = "bg-[#ec5b53]",
  textColor = "white",
}) => {
  return (
    <>
      <button
        className={`${buttonColor} w-full rounded border-solid border-[1px] border-[#e3c6c6] lg:px-[45px] lg:py-[16px] px-[24px] py-[16px] text-[${textColor}] font-bold  transition transform hover:-translate-x-4 `}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
