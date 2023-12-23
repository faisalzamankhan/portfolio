import Card from "../atom/card";

const Skills = () => {
  return (
    <div>
      <h1>
        What Services you will <br />
        Get from me!
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <Card imgSrc={"./NXyGTY.svg"}>
          <h5>HTML</h5>
          <p>
            Lorem Ipsum is simply dummy text of the
            <br /> printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever
          </p>
        </Card>
        <Card imgSrc={"./cmVntx.svg"}>
          <h5>CSS</h5>
          <p>
            Lorem Ipsum is simply dummy text of the
            <br /> printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever
          </p>
        </Card>
        <Card imgSrc={"./OPQZRI.svg"} svgWidth={60}>
          <h5>Javascript</h5>

          <p>
            Lorem Ipsum is simply dummy text of the
            <br /> printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever
          </p>
        </Card>
        <Card imgSrc={"./yDBrsT.svg"}>
          <h5>REACT</h5>
          <p>
            Lorem Ipsum is simply dummy text of the
            <br /> printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever
          </p>
        </Card>
        <Card imgSrc={"./Next1.svg"}>
          <h5>Next.JS</h5>
          <p>
            Lorem Ipsum is simply dummy text of the
            <br /> printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever
          </p>
        </Card>

        <Card imgSrc={"./XusSDQ.svg"}>
          <h5>AntDesign</h5>
          <p>
            Lorem Ipsum is simply dummy text of the
            <br /> printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever
          </p>
        </Card>
        <Card imgSrc={"./skqWeY.svg"}>
          <h5>Tailwind</h5>
          <p>
            Lorem Ipsum is simply dummy text of the
            <br /> printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever
          </p>
        </Card>

        <Card imgSrc={"./bootstrap.svg"}>
          <h5>Bootstrap</h5>
          <p>
            Lorem Ipsum is simply dummy text of the
            <br /> printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever
          </p>
        </Card>

        <Card imgSrc={"./shopify.svg"}>
          <h5>Shopify Polaris</h5>
          <p>
            Lorem Ipsum is simply dummy text of the
            <br /> printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
