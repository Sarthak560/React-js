import { useState } from "react";
import Card from './components/Card';

function BgChanger() {
  let [color, setColor] = useState("black");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="flex flex-col items-center justify-center h-full gap-6">
            <h1 className="text-4xl font-bold text-white">Change Background Color</h1>
            <div className="flex gap-4">
                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    onClick={() => setColor("blue")}
                >
                    Blue
                </button>
                <button 
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    onClick={() => setColor("red")}
                >
                    Red
                </button>
                <button 
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    onClick={() => setColor("green")}
                >
                    Green
                </button>
                <button 
                    className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                    onClick={() => setColor("yellow")}
                >
                    Yellow
                </button>
            </div>
        </div>  
    </div>
  );
}

export default BgChanger;
