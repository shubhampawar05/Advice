import React, { useEffect, useState } from "react";

const Advice = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    let response = await fetch("https://api.adviceslip.com/advice");
    let result = await response.json();
    setData(result?.slip?.advice);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col ">
      <div className=" relative sm:w-[550px]  h-fit bg-[#2C3546] flex flex-col items-center justify-center font-bold text-white rounded-xl p-4">
        <p className="text-[#2AF598] text-xl">advice #11</p>
        <p className="text-[28px] p-8">{data}</p>
        <div className="bg-[#2AF598]  h-12 w-12 rounded-full flex items-center justify-center absolute -bottom-6 " onClick={getData}>
          <button>
            <img src={"/icon-dice.svg"} alt="dice icon" className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advice;
