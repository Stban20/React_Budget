import React, { Fragment, useState } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import Error from "./Error";

const Form = ({ setSpending, setCreateSpending }) => {
  //
  const [nameSpending, setNameSpending] = useState("");
  const [amountSpending, setAmountSpending] = useState(0);
  const [error, setError] = useState(false);

  // Function that the Spending
  const addSpending = (e) => {
    e.preventDefault();

    //Validation
    if (
      nameSpending.trim === "" ||
      !isNaN(nameSpending) ||
      amountSpending < 1 ||
      isNaN(amountSpending)
    ) {
      setError(true);
      return;
    }
    //If the validation pass
    setError(false);

    //Built the spending
    const spending = {
      nameSpending,
      amountSpending,
      id: shortid.generate(),
    };

    //send the spending to the main component
    // addNewSpending(spending)
    setSpending(spending);
    setCreateSpending(true);

    //reset form
    setNameSpending("");
    setAmountSpending(0);
  };

  return (
    <Fragment>
      {error ? <Error message="The spending is invalid" /> : null}
      <form onSubmit={addSpending}>
        <h2>Add your spendings here</h2>
        <div className="campo">
          <label>Spending Name</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ex. Transport"
            value={nameSpending}
            onChange={(e) => setNameSpending(e.target.value)}
          />
        </div>
        <div className="campo">
          <label>Spending Amount</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="Ex. 300"
            value={amountSpending}
            onChange={(e) => setAmountSpending(parseInt(e.target.value))}
          />
        </div>
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Add Spending"
        />
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  setSpending: PropTypes.func,
  setCreateSpending: PropTypes.func,
};

export default Form;
