import style from "./Button.module.css";
const Button = ({
  text,
  buttonColor = "bg-[#ec5b53]",
  textColor = "white",
  scaleAxis = "y",
  originStart = "origin-top",
  originEnd = "origin-bottom",
}) => {
  return (
    <>
      <button
        className={`${buttonColor}  w-full rounded border-solid border-[1px] border-[#e3c6c6] lg:px-[45px] lg:py-[16px] px-[24px] py-[16px] text-[${textColor}] font-bold hover:text-[white] 
        relative
        z-[1]
        after:content-['']
        after:absolute
        after:z-[-1]
        after:bg-[#e44239]
        after:w-full
        after:h-full
        after:bottom-0
        after:left-0
        after:${originEnd}
        after:scale-${scaleAxis}-0
        after:transition
        after:duration-300
        after:ease-in
        hover:after:scale-${scaleAxis}-100
        hover:after:${originStart}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
