const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisable = false,
}) => {
  return (
    <div className="w-[90%] bg-white m-auto rounded-2xl p-6 my-4 flex ">
      <div className="w-1/2">
        <label
          htmlFor="myInput"
          className="font-semibold mb-2 text-slate-500 inline-block"
        >
          {label}
        </label>
        <input
          id="muInput"
          className="outline-none border-none text-xl w-full"
          type="number"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisabled}
        />
      </div>
      <div className="w-1/2 justify-end flex flex-wrap text-right">
        <p className="text-slate-500 font-semibold mb-2 w-full">
          Currency Type
        </p>
        <select
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="text-lg border-none outline-none bg-slate-100 p-1 px-4 rounded-lg"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default InputBox;
