import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const CalculatorApp = () => {
  return (
    <React.Fragment>
      <section>
        <div className="bg-gray-900 w-96 h-screen mx-auto rounded-lg overflow-hidden my-5">
          <div className="text-gray-200 w-full font-bold text-2xl h-16 flex items-center space-x-2 pl-2">
            <GiHamburgerMenu />
            <p className="uppercase">Calculator App</p>
          </div>

          {/* screen */}
          <div className="w-full h-20">
            <input
              type="text"
              placeholder=" 0 "
              className="w-full h-full border border-white bg-gray-900 text-3xl text-right text-white pr-5"
            />
          </div>

          {/* keypad */}
          <div className="grid grid-cols-4 gap-2 my-3 mx-4">
            <button className="text-gray-900 bg-white w-20 h-20 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">AC</button>
            <button className="text-gray-900 bg-white w-20 h-20 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">C</button>
            <button className="text-gray-900 bg-white w-20 h-20 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">/</button>
            <button className="text-gray-900 bg-white w-20 h-42 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow row-span-2">+</button>


            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">9</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">8</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">7</button>


              <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">4</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">5</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">6</button>
            <button className="text-gray-900 bg-white w-20 h-20  rounded-lg font-bold text-3xl flex justify-center items-center cursor-pointer shadow">-</button>


              <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">1</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">2</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">3</button>
            <button className="text-gray-900 bg-white w-20 h-20  rounded-lg font-bold text-3xl flex justify-center items-center cursor-pointer shadow">*</button>


              <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">.</button>
            <button className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">0</button>
            <button className="text-gray-900 bg-white w-43 h-20 rounded-lg font-bold text-3xl flex justify-center items-center cursor-pointer shadow col-span-2">=</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CalculatorApp;
