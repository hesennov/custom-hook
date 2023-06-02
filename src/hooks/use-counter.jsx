import { Children, createElement, useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(2);

  const increment = () => setCount((count) => count + 1);

  const decrement = () => setCount((count) => count - 1);

  const NegativeContent = ({ children, ...props }) => {
    if (count < 0) {
      return createElement("div", props, children);
      // <div>{children}</div>;
    }
    {
      return null;
    }
  };

  return {
    count,
    increment,
    decrement,
    NegativeContent,
  };
}
