// convert curr for a country to other

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [result, setResult] = useState(null);
  const [firstCurrency, setFirstCurrency] = useState("EUR");
  const [secondCurrency, setSecondCurrency] = useState("USD");
  const [finalResult, setFinalResult] = useState(0);

  function handleResult(data) {
    setResult(data);
  }

  function handleFirstCurrency(data) {
    setFirstCurrency(data);
  }

  function handleSecondCurrency(data) {
    setSecondCurrency(data);
  }

  useEffect(() => {
    async function GetCurrency() {
      if (!result) return;
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${result}&from=${firstCurrency}&to=${secondCurrency}`
      );
      const data = await res.json();
      setFinalResult(
        data.rates[secondCurrency] ? data.rates[secondCurrency] : 0
      );
    }
    if (firstCurrency === secondCurrency) return setFinalResult(result);
    GetCurrency();
  }, [result, firstCurrency, secondCurrency]);
  return (
    <div>
      <SumCurrency onChangeResult={handleResult} />
      <ChoeseCurrency
        onFirstCurr={handleFirstCurrency}
        onSecondCurr={handleSecondCurrency}
      />
      <OutPut FinalResult={finalResult} />
    </div>
  );
}

function SumCurrency({ onChangeResult }) {
  return (
    <input
      type="text"
      onChange={(e) => onChangeResult(Number(e.target.value))}
    />
  );
}

function ChoeseCurrency({ onFirstCurr, onSecondCurr }) {
  return (
    <div style={{ display: "inline-block" }}>
      <select
        defaultValue={"EUR"}
        onChange={(e) => onFirstCurr(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select onChange={(e) => onSecondCurr(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
    </div>
  );
}

function OutPut({ FinalResult }) {
  return <p>{FinalResult}</p>;
}
