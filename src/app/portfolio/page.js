import Layout from "../../../components/common/layout";

import dynamic from "next/dynamic";

const VideoPlayer = dynamic(() => import("../../../components/player/player"), {
  ssr: false,
});
const Portfolio = () => {
  return (
    <div className="margin">
      <Layout title={"My Portfolio"} subTitle={"Home / Portfoilio"} />
      <div className="inner-container">
        <h1 className="text-[#000a2d] ">
          What Services you will <br />
          Get from me!
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <VideoPlayer url={"https://www.youtube.com/watch?v=LXb3EKWsInQ"} />
        </div>
        <div>
          <VideoPlayer url={"https://www.youtube.com/watch?v=LXb3EKWsInQ"} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
