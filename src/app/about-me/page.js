import Image from "next/image";
import Layout from "../../../components/common/layout";

const About = () => {
  return (
    <div className="margin">
      <Layout title={"About Me"} subTitle={"Home / About Me"} />
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <h1>Faisal Zaman</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
        </div>

        <div className="">
          <Image src="/Faisal.png" width={500} height={200} />
        </div>
      </div>
    </div>
  );
};

export default About;
