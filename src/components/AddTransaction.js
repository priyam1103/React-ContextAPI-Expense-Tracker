import React, { useState, useContext } from "react";
import "../App.css";
import { GlobalContext } from "../context/globalState";
export default function AddTransaction() {
  const { addTransactions, transactions } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const addTran = (e) => {
    e.preventDefault();
    const trac = {
      id: transactions.length + 1,
      text: text,
      amount: +amount,
    };
    addTransactions(trac);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label for="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label for="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button onClick={(e) => addTran(e)} className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
}
