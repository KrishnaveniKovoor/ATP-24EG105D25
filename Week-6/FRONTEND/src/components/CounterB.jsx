import { useCounter } from "../context/CounterContext";

const CounterB = () => {
  const { count, decrement } = useCounter();

  return (
    <div>
      <h3>Component B</h3>
      <p>Count: {count}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default CounterB;