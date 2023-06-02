import useCounter from "../hooks/use-counter";
import "../App.css";
const Counter = () => {
  const {
    count,
    increment,
    decrement,
    NegativeContent,
    isNegative,
    isPositive,
  } = useCounter();
  return (
    <div>
      <button onClick={increment}>artir</button>
      {count}
      <button onClick={decrement}>azalt</button>
      {isPositive && <div className="green"> bu sayi oke </div>}
      <NegativeContent className={"red"}>cok indin aga</NegativeContent>
    </div>
  );
};
export default Counter;
