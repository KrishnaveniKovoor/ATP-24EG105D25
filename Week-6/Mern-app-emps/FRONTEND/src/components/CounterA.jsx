import { useCounter } from "../context/CounterContext";

const CounterA = () => {
  const { count, increment } = useCounter();

  return (
    <div>
      <h3>Component A</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default CounterA;