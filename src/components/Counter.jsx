import useCounter from "../hooks/use-counter";

const Counter = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <button onClick={increment}>artir</button>
      {count}
      <button onClick={decrement}>azalt</button>
    </div>
  );
};
export default Counter;
