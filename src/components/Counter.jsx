import useCounter from "../hooks/use-counter";
import "../App.css";
const Counter = () => {
  const { count, increment, decrement, NegativeContent } = useCounter();
  return (
    <div>
      <button onClick={increment}>artir</button>
      {count}
      <button onClick={decrement}>azalt</button>
      <NegativeContent className={"red"}>cok indin aga</NegativeContent>
    </div>
  );
};
export default Counter;
