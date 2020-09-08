import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
export default function Transactions({ transaction }) {
  const { deleteTransactions } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "minus" : "plus";
  return (
    <div>
      <li className={`${sign}`}>
        {transaction.text} <span>{transaction.amount}</span>
        <button
          onClick={() => deleteTransactions(transaction.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
}
