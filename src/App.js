import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import BudgetControl from "./components/BudgetControl";

function App() {
  // useState Budget
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [spendings, setSpendings] = useState([]);
  const [spending, setSpending] = useState({});
  const [createSpending, setCreateSpending] = useState(false);

  //useEffect that update the spending
  useEffect(() => {
    //add new budget
    if (createSpending) {
      setSpendings([...spendings, spending]);
      
      // rest fom the budget
      const budgetRemaining = remaining - spending.amountSpending;
      setRemaining(budgetRemaining);

      //reset to false
      setCreateSpending(false);
    }
  }, [spending, createSpending, spendings, remaining]);

  //Funtion that execute when a new spending, it changed with useState
  // const addNewSpending = spending =>{
  //   setSpendings([
  //     ...spendings,
  //     spending
  //   ])
  // }

  return (
    <div className="container">
      <header>
        <h1>Budget React App</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? (
            <Question
              setBudget={setBudget}
              setRemaining={setRemaining}
              setShowQuestion={setShowQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  // addNewSpending={addNewSpending}
                  setSpending={setSpending}
                  setCreateSpending={setCreateSpending}
                />
              </div>
              <div className="one-half column">
                <List spendings={spendings} />
                <BudgetControl budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
