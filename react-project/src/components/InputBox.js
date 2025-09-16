import React from "react";
import { useId } from "react";

function InputBox({
  label,
  amount,
  currencydisabled = false,
  amountdisabled = false,
  onAmountChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  onCurrencyChange,
  className = "",
}) {
  const amountID = useId();

  return (
    <div
      className={`backdrop-blur-lg bg-white/20 border border-white/30 p-6 rounded-xl text-sm flex shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="w-1/2 pr-4">
        <label
          htmlFor={amountID}
          className="text-white/80 mb-3 inline-block font-medium text-base"
        >
          {label}
        </label>
        <input
          id={amountID}
          className="outline-none w-full bg-transparent py-2 text-white placeholder-white/50 text-lg font-semibold border-b border-white/30 focus:border-white transition-colors duration-300"
          type="number"
          placeholder="0.00"
          disabled={amountdisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right pl-4 border-l border-white/20">
        <p className="text-white/80 mb-3 w-full font-medium text-base">
          Currency
        </p>
        <select
          className="rounded-lg px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 cursor-pointer outline-none text-white font-semibold hover:bg-white/30 focus:bg-white/30 transition-all duration-300 min-w-[80px]"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencydisabled}
        >
          {currencyOptions.map((currency) => (
            <option
              key={currency}
              value={currency}
              className="bg-gray-800 text-white"
            >
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
