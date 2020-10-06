import React, { Fragment } from "react";
import { reviewBudget } from "../helpers";
import PropTypes from "prop-types";

const BudgetControl = ({ budget, remaining }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Budget: $ {budget}</div>
      <div className={reviewBudget(budget, remaining)}>
        Remaining: $ {remaining}
      </div>
    </Fragment>
  );
};

BudgetControl.propTypes = {
  budget: PropTypes.number,
  remaining: PropTypes.number,
};

export default BudgetControl;
