import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Step />
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function previousClick() {
    if (step <= 1) {
      return;
    }
    setStep((s) => s - 1);
  }

  function nextClick() {
    if (step >= 3) {
      return;
    }
    setStep((s) => s + 1);
  }

  function isOpenWin() {
    if (isOpen === true) {
      setIsOpen(false);
      setStep(1);
    }
    if (isOpen === false) {
      setIsOpen(true);
    }
  }

  return (
    <>
      <button className="close" onClick={isOpenWin}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={previousClick}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={nextClick}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

//Just a counter for date
// // export default function App() {
// //   return (
// //     <div>
// //       <Counter />
// //     </div>
// //   );
// // }

// // function Counter() {
// //   const [step, setStep] = useState(1);
// //   const [count, setCount] = useState(0);

// //   function AddSteps() {
// //     setStep((s) => s + 1);
// //   }

// //   function SubSteps() {
// //     setStep((s) => s - 1);
// //     if (step <= 0) setStep(1);
// //   }
// //   function AddCounts() {
// //     setCount((s) => s + step);
// //   }

// //   function SubCounts() {
// //     setCount((s) => s - 1 * step);
// //   }

// //   function addDays(date, days) {
// //     const newDate = new Date(date.getTime()); // Create a copy to avoid modifying the original
// //     newDate.setDate(newDate.getDate() + days);
// //     return newDate;
// //   }
// //   function handleChange(e) {
// //     setCount(e);
// //   }
// //   function handleChangeStpes(e) {
// //     setStep(e);
// //   }

// //   const today = new Date();
// //   const futureDate = addDays(today, count);

// //   const formattedDate = futureDate.toLocaleDateString("en-US", {
// //     weekday: "long",
// //     year: "numeric",
// //     month: "long",
// //     day: "numeric",
// //   });

// //   return (
// //     <div>
// //       {/* <button onClick={SubSteps}>-</button>
// //       <p style={{ display: "inline-block" }}>Step:{step}</p>
// //       <button onClick={AddSteps}>+</button>
// //       <br /> */}
// //       <input
// //         type="range"
// //         min={0}
// //         max={10}
// //         value={step}
// //         onChange={(e) => handleChangeStpes(Number(e.target.value))}
// //       ></input>
// //       {step}
// //       <br />
// //       <>
// //         <button onClick={SubCounts}>-</button>
// //         <input
// //           value={count}
// //           type="text"
// //           onChange={(e) => handleChange(Number(e.target.value))}
// //         ></input>
// //         <button onClick={AddCounts}>+</button>
// //       </>
// //       <>
// //         <p>{`${count < 0 ? count * -1 : count} Day(s) ${
// //           count < 0 ? ` ago` : ` `
// //         } form today is ${formattedDate}`}</p>
// //       </>
// //       {step !== 1 || count !== 0 ? (
// //         <button
// //           onClick={() => {
// //             setStep(1);
// //             setCount(0);
// //           }}
// //         >
// //           Reset
// //         </button>
// //       ) : null}
// //     </div>
// //   );
// // }
