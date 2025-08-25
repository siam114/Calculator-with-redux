import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { loadAnswer, loadBackspace, loadButtons, loadClear } from './../redux/calculatorRedux/calculator.actions';
import { CALCULATOR_KEY } from './../redux/calculatorRedux/calculator.reducer';

const CalculatorApp = () => {
  const dispatch = useDispatch();

      const handleAnswer = (e) =>{
        e.preventDefault()
        // alert(number)
      dispatch(loadAnswer())
    }

        // view store 
    const viewCalculator = useSelector((state) =>{
        return state[CALCULATOR_KEY]
    })


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
              value={(viewCalculator.ans).length === 0 ? viewCalculator.number : viewCalculator.ans}
              className="w-full h-full border border-white bg-gray-900 text-3xl text-right text-white pr-5"
            />
          </div>

          {/* keypad */}
          <div className="grid grid-cols-4 gap-2 my-3 mx-4">
            <button onClick={() =>dispatch(loadClear())} className="text-gray-900 bg-white w-20 h-20 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">AC</button>
            <button onClick={() =>dispatch(loadBackspace())} className="text-gray-900 bg-white w-20 h-20 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">C</button>
            <button onClick={() =>dispatch(loadButtons('/'))} className="text-gray-900 bg-white w-20 h-20 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">/</button>
            <button onClick={() =>dispatch(loadButtons('+'))} className="text-gray-900 bg-white w-20 h-42 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow row-span-2">+</button>


            <button onClick={() =>dispatch(loadButtons(9))} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">9</button>
            <button onClick={() =>dispatch(loadButtons(8))} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">8</button>
            <button onClick={() =>dispatch(loadButtons(7))} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">7</button>


              <button  onClick={() =>dispatch(loadButtons(4))} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">4</button>
            <button onClick={() =>dispatch(loadButtons(5))} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">5</button>
            <button onClick={() =>dispatch(loadButtons(6))} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">6</button>
            <button  onClick={() =>dispatch(loadButtons('-'))} className="text-gray-900 bg-white w-20 h-20  rounded-lg font-bold text-3xl flex justify-center items-center cursor-pointer shadow">-</button>


              <button onClick={() =>dispatch(loadButtons(1))} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">1</button>
            <button onClick={() =>dispatch(loadButtons(2))} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">2</button>
            <button onClick={() =>dispatch(loadButtons(3))} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">3</button>
            <button onClick={() =>dispatch(loadButtons('*'))} className="text-gray-900 bg-white w-20 h-20  rounded-lg font-bold text-3xl flex justify-center items-center cursor-pointer shadow">*</button>


              <button onClick={() =>dispatch(loadButtons("."))} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">.</button>
            <button onClick={() =>dispatch(loadButtons(0))} className="text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-2xl flex justify-center items-center cursor-pointer shadow">0</button>
            <button onClick={handleAnswer} className="text-gray-900 bg-white w-43 h-20 rounded-lg font-bold text-3xl flex justify-center items-center cursor-pointer shadow col-span-2">=</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CalculatorApp;
