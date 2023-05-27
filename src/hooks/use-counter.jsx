import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(2);

  const increment = () => setCount((count) => count + 1);

  const decrement = () => setCount((count) => count - 1);

  return {
    count,
    increment,
    decrement,
  };
}
  