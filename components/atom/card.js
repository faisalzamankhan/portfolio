const Card = ({ imgSrc, content, children, svgWidth = 70 }) => {
  return (
    <div className=" border-[1px] border-solid rounded border-[#e1ebf7] flex flex-col justify-center items-center p-[10px] text-center shadow-md py-[20px] transition hover:bg-[#ec5b53]  duration-1000">
      <img src={`${imgSrc}`} width={svgWidth} />
      {children}
    </div>
  );
};
export default Card;
