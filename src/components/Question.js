import React, { Fragment, useState } from "react";
import Error from "./Error";

const Question = ({ setBudget, setRemaining, setShowQuestion }) => {
  // useState
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);
  //function to read budget
  const defineBudget = (e) => {
    setAmount(parseInt(e.target.value, 10));
  };

  //submit add budget
  const addBudget = (e) => {
    e.preventDefault();
    //validation
    if ((amount < 1) | isNaN(amount)) {
      setError(true);
      return;
    }

    //if the validation pass
    setError(false);
    setBudget(amount);
    setRemaining(amount);
    setShowQuestion(false)
  };

  return (
    <Fragment>
      <h2>Add yout Budget</h2>
      {error ? <Error message="The budget is invalid" /> : null}
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Add your Budget"
          onChange={defineBudget}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Send Budget"
        />
      </form>
    </Fragment>
  );
};

export default Question;
