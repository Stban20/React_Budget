import React from "react";

const Spending = ({ spending }) => (
  <li className="gasto">
    <p>
      {spending.nameSpending}

      <span className="gasto">$ {spending.amountSpending}</span>
    </p>
  </li>
);

export default Spending;
