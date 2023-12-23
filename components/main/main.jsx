import Button from "../atom/Button";

const Main = () => {
  return (
    <div className="bg-[url('../../public/hero.jpg')] bg-cover h-auto pl-[2rem] py-[1rem]">
      <div className=" grid grid-cols-3">
        <div className="flex flex-col justify-center  col-span-2">
          <p className="text-[#ec5b53]">GET EVERY SINGLE SOLUTIONS</p>
          <h1 className="text-[#002d5b]">I’m Web Developer Faisal Zaman </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div></div>
      </div>
      <div className="flex gap-3 max-w-[370px]">
        <Button text={"learn More"} />
        <Button text={"Hire Me"} buttonColor={"white"} textColor={"grey"} />
      </div>
    </div>
  );
};

export default Main;
