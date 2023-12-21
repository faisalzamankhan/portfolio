const Button = ({ text }) => {
  return (
    <>
      <button className="bg-[#ec5b53] rounded lg:px-[45px] lg:py-[16px] px-[24px] py-[16px] text-white font-bold  transition transform hover:-translate-x-4 ">
        {text}
      </button>
    </>
  );
};

export default Button;
