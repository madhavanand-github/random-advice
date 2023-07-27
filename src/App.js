import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <img src="./quote.svg" alt="quote" />
      <h2> {advice} </h2>
      <button onClick={() => getAdvice()}>Random Advice</button>
    </>
  );
}
