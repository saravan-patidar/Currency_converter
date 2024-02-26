import { useState } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [updateAmount, setUpdateAmount] = useState(0);
  const CurrencyInfo = useCurrencyInfo(from);
  const currencyKeys = Object.keys(CurrencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(updateAmount);
    setUpdateAmount(amount);
  };

  const calcuateAmount = () => {
    let convertedAmount = amount * CurrencyInfo[to];
    setUpdateAmount(convertedAmount);
  };
  return (
    <div className="bg-gradient-to-r from-blue-400 to-red-400 w-full h-screen relative">
      <form onSubmit={(e) => e.preventDefault()}>
        <h2 className="text-center text-white text-3xl pt-20 font-bold ">
          Currency Converter
        </h2>
        <div className="w-[50%] h-[340px] top-1/2 left-1/2 absolute -translate-y-1/2 -translate-x-1/2  bg-amber-300  bg-opacity-20 rounded-xl shadow-md shadow-blue-500">
          <InputBox
            label="From"
            amount={amount}
            onAmountChange={setAmount}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            currencyOptions={currencyKeys}
          />
          <div className="w-full text-center -my-6">
            <button
              className="p-2 bg-blue-600 text-white rounded-lg shadow-md shadow-red-900"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <InputBox
            label="To"
            amount={updateAmount}
            onAmountChange={setUpdateAmount}
            onCurrencyChange={setTo}
            selectCurrency={to}
            currencyOptions={currencyKeys}
          />
          <div className="w-[80%] m-auto">
            <button
              type="submit"
              className="p-2 w-full font-semibold bg-blue-600 rounded-full  hover:bg-blue-700 text-white"
              onClick={calcuateAmount}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
