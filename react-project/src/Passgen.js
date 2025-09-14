import { useCallback, useEffect, useState, useRef } from "react";

function PassGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const passwordRef = useRef(null);

  // Generate password function
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (character) str += "!@#$%^&*()_+?><:{}[]";
    if (number) str += "0123456789";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character]);

  // Copy to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 99999);
    if (password) {
      window.navigator.clipboard.writeText(password);
      setShowCopyNotification(true);
      setTimeout(() => setShowCopyNotification(false), 2000);
    }
  }, [password]);

  // Auto-generate on first load
  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  // Password strength calculation
  const getStrength = () => {
    let strength = 0;
    if (length > 8) strength++;
    if (length > 12) strength++;
    if (number) strength++;
    if (character) strength++;
    return strength;
  };

  const strength = getStrength();

  return (
    <div className="w-full h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex justify-center items-center px-4">
      {/* Copy Notification Popup */}
      {showCopyNotification && (
        <div className="fixed top-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
          ✅ Password copied to clipboard!
        </div>
      )}
      
      <div className="backdrop-blur-lg bg-gray-800/80 p-8 rounded-3xl shadow-2xl w-full max-w-md text-gray-100 border border-gray-700">
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
          🔐 Password Generator
        </h1>

        {/* Input & Copy button */}
        <div className="flex shadow-lg rounded-lg overflow-hidden mb-6 border border-gray-700">
          <input
            type="text"
            value={password}
            className="flex-grow px-4 py-3 text-lg text-orange-400 bg-gray-700/80 outline-none focus:ring-2 focus:ring-orange-400 transition-all"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-5 py-3 font-semibold transition-all duration-300"
          >
            Copy
          </button>
        </div>

        {/* Strength Indicator */}
        <div className="mb-6">
          <p className="text-sm text-gray-300 mb-2">Strength:</p>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <div
              className={`h-3 transition-all duration-500 ${
                strength <= 1
                  ? "bg-red-500 w-1/4"
                  : strength === 2
                  ? "bg-yellow-500 w-2/4"
                  : strength === 3
                  ? "bg-green-500 w-3/4"
                  : "bg-emerald-500 w-full"
              }`}
            ></div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-6">
          {/* Length Slider */}
          <div>
            <label className="block text-orange-400 font-medium mb-2">
              Length: {length}
            </label>
            <input
              type="range"
              min={6}
              max={40}
              value={length}
              className="w-full accent-orange-500 cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          {/* Numbers Checkbox */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={number}
              onChange={() => setNumber((prev) => !prev)}
              className="w-5 h-5 accent-orange-500"
            />
            <span className="font-medium group-hover:text-orange-300 transition-colors">
              Include Numbers
            </span>
          </label>

          {/* Characters Checkbox */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={character}
              onChange={() => setCharacter((prev) => !prev)}
              className="w-5 h-5 accent-orange-500"
            />
            <span className="font-medium group-hover:text-orange-300 transition-colors">
              Include Special Characters
            </span>
          </label>

          {/* Generate Button */}
          <button
            onClick={generatePassword}
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-3 rounded-lg text-xl font-bold shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default PassGenerator;
