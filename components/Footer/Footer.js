const Footer = () => {
  return (
    <div className="bg-[#080827] footer ">
      <div className="flex flex-col items-center py-[140px]">
        <img src="./logo_light.png" />
        <div>
          <a href="">hireme@portfolio.com</a>
        </div>
        <span>221B Baker Street, Post office Box 353 </span>
        <span> Park Road, USA - 215431</span>
      </div>
      <div className="flex justify-around py-[17px] flex-wrap">
        <div className="flex  justify-around flex-wrap">
          <p className="text-[#fff] ">Copyright © 2023 All rights reserved</p>
          <p className="text-[#fff]">| This template is made with by</p>
          <img src="./heart-regular.svg" style={{ fontStyle: "red" }} />
          <p className="text-[#fff] "> Faisal Zaman</p>
        </div>
        <div className="flex space-x-5">
          <p className="text-[#fff] space-x-4">Stay Connected</p>
          <img src="./x-twitter.svg" />
          <img src="./globe-solid.svg" />
          <img src="./heart-regular.svg" />
          <img src="./instagram.svg" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
