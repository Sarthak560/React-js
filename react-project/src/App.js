import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/usecurrencyinfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [result, setResult] = useState(0);

  const currencyinfo = useCurrencyInfo(from);

  const options = Object.keys(currencyinfo || {});

  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
    setResult(amount);
    setAmount(result);
  };
  const convert = () => {
    setResult(amount * currencyinfo[to]);
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="w-full relative z-10">
        <div className="w-full max-w-lg mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
              Currency Converter
            </h1>
            <p className="text-white/80 text-lg drop-shadow">
              Convert currencies in real-time
            </p>
          </div>

          {/* Main Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
              className="space-y-6"
            >
              {/* From Currency */}
              <div className="transform transition-all duration-300 hover:scale-105">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectedCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>

              {/* Swap Button */}
              <div className="relative flex justify-center">
                <button
                  type="button"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full border-4 border-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-180 font-semibold"
                  onClick={swapCurrencies}
                >
                  ⇅ Swap
                </button>
              </div>

              {/* To Currency */}
              <div className="transform transition-all duration-300 hover:scale-105">
                <InputBox
                  label="To"
                  amount={result}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                  amountdisabled
                />
              </div>

              {/* Convert Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg"
              >
                Convert {from} to {to}
              </button>

              {/* Result Display */}
              {result > 0 && (
                <div className="text-center p-4 bg-white/20 rounded-xl border border-white/30">
                  <p className="text-white text-lg">
                    <span className="font-bold text-xl">
                      {amount} {from}
                    </span>
                    <span className="mx-2">=</span>
                    <span className="font-bold text-xl text-green-300">
                      {result.toFixed(2)} {to}
                    </span>
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-white/60 text-sm">
              Real-time exchange rates • Powered by ExchangeRate-API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
