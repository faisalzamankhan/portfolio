import style from "./page.module.css";
import dynamic from "next/dynamic";

const VideoPlayer = dynamic(() => import("../../../components/player/player"), {
  ssr: false,
});
const Portfolio = () => {
  return (
    <div>
      <div className={`${style.background} flex flex-col justify-center`}>
        <h1 className="text-[#000a2d]  inner-container"> My Portfolio</h1>
        <a className="text-[#ec5b53] inner-container">Home / Portfoilio</a>
      </div>
      <div className="inner-container">
        <h1 className="text-[#000a2d] ">
          What Services you will <br />
          Get from me!
        </h1>
        <VideoPlayer />
      </div>
    </div>
  );
};

export default Portfolio;
