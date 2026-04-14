import CounterA from "./components/CounterA";
import CounterB from "./components/CounterB";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Shared Counter (Context API)</h2>
      <CounterA />
      <CounterB />
    </div>
  );
};

export default App;