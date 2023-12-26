const Contact = () => {
  return (
    <div className="bg-[url(../../public/hero.jpg)] h-auto bg-no-repeat bg-cover bg-center flex flex-col justify-center pl-[2rem] text-[#000a2d] py-[10px]">
      <h1>Contact Us</h1>
      <h4> Get in Touch</h4>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 ">
              <textarea
                className="w-[100%] border-2 h-[200px] px-[15px] py-[6px]"
                placeholder="Enter Message"
              />
            </div>
            <div className="col-span-1 ">
              <input
                className="w-[100%] px-[18px] py-[6px] h-[48px] border-2"
                placeholder="Enter your Name"
              />
            </div>
            <div className="col-span-1">
              <input
                className="w-[100%] px-[18px] py-[6px] h-[48px] border-2"
                placeholder="Email"
              />
            </div>

            <div className="col-span-2">
              <input
                className="w-[100%] px-[18px] py-[6px] h-[48px] col-span-2 border-2"
                placeholder="Enter Subject"
              />
            </div>
            <div className="">
              <button className="border-2 border-[#ec5b53] px-[44px] py-[18px] text-[#ec5b53]">
                <p>S E N D</p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-20">
          <div className="flex space-x-2">
            <img src="./Home.svg" />
            <div>
              <span className="text-[#2a2a2a]">Buttonwood, California.</span>
              <span className="text-[#8a8a8a]">Rosemead, CA 91770</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <img src="./mobile.svg" />
            <div>
              <span className="text-[#2a2a2a]">+1 253 565 2365.</span>
              <span className="text-[#8a8a8a]">Mon to Fri 9am to 6pm</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <img src="./mail.svg" />
            <div>
              <span className="text-[#2a2a2a]">support@colorlib.com.</span>
              <span className="text-[#8a8a8a]">
                Send us your query anytime!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
