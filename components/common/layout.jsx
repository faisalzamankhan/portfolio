import style from "./common.module.css";
const Layout = ({ title, subTitle }) => {
  return (
    <div className={`${style.background} flex flex-col justify-center`}>
      <h1 className="text-[#000a2d]  inner-container"> {title}</h1>
      <a className="text-[#ec5b53] inner-container">{subTitle}</a>
    </div>
  );
};

export default Layout;
