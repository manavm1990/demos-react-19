// 'useState' is used to tell React that we want to keep track of some information in this component
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(100);

  return (
    <>
      <p>Here is the current count: {count}</p>;
      <button
        type="button"
        className="rounded bg-green-500 px-2 py-4 text-white"
        onClick={() => {
          // Prevent situations involving stale data - use the callback version of 'setState'
          // Bring in previous state AS A PARAMETER (not as a variable)
          // Return the new state
          setCount((prev) => prev + 1);
        }}
      >
        Update Count
      </button>
    </>
  );
}
