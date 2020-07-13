import React from "react";
import { useMachine } from "@xstate/react";
import { machine } from "./machine";
export const App = () => {
  const [incrementService, send] = useMachine(machine);
  const { count } = incrementService.context;

  return (
    <div className="flex">
      <div className="border-gray-600 shadow-md p-10">
        <h1 className="text-center mt-4 text-4xl">
          XState with React rocks🔥🔥🎸
        </h1>
        <div>
          <div>
            count: <span id="count-number">{count}</span>
          </div>
          <button
            id="increment-btn"
            disabled={incrementService.matches("disabled")}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              incrementService.matches("disabled") &&
              "opacity-50 cursor-not-allowed"
            }`}
            onClick={() => {
              send("INCREMENT");
            }}
          >
            increment
          </button>
          <button
            id="reset-btn"
            disabled={incrementService.matches("active")}
            className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${
              incrementService.matches("active") &&
              "opacity-50 cursor-not-allowed"
            }`}
            onClick={() => {
              send("RESET");
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
