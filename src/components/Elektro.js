import React from "react";
import "./Elektro.css";

export default function Elektro(props) {
  const addElektro = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    props.setElektro(props.elektro + amount);
    props.setMyMoney(props.myMoney - amount);
    props.setMyExpenses(props.myExpenses + amount);
    let date = String(e.target.date.value);
    props.setElektroFlow([{ amount, date }, ...props.elektroFlow]);
    props.history.push("/expenses");
  };

  return (
    <div>
      <form onSubmit={addElektro} className="formElektro">
        <input
          name="amount"
          type="text"
          placeholder="type Elektro €"
          className="inputElektro"
        />
        <input
          name="date"
          type="text"
          placeholder="type date"
          className="inputElektro"
        />
        <button type="submit" className="buttonElektro">
          Save
        </button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.elektroFlow.map((transfer, i) => {
          return (
            <div key={i} className="mapedSpecElektro">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Date: <b>{transfer.date}</b>
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <h2>All Elektro so far: {props.elektro}€</h2>
      </div>
    </div>
  );
}
