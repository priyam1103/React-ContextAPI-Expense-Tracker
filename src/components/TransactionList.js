import React, { useContext } from "react";
import Transactions from "./Transactions";
import "../App.css";
import { GlobalContext } from "../context/globalState";
export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transactions key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
