import React from "react";
import "./Energetika1.css";

export default function Energetika1(props) {
  const addEnergetika1 = (e) => {
    e.preventDefault();
    console.log(props);
    console.log(e.target.amount.value);
    let amount = Number(e.target.amount.value);
    props.setEnergetika1(props.energetika1 + amount);
    props.setMyMoney(props.myMoney - amount);
    props.setMyExpenses(props.myExpenses + amount);
    let date = String(e.target.date.value);
    props.setEnergetika1Flow([{ amount, date }, ...props.energetika1Flow]);
    props.history.push("/expenses");
  };

  return (
    <div>
      <form onSubmit={addEnergetika1} className="formE1">
        <input
          name="amount"
          type="text"
          placeholder="type Energetika1 €"
          className="inputE1"
        />
        <input
          name="date"
          type="text"
          placeholder="type date"
          className="inputE1"
        />
        <button type="submit" className="buttonE1">
          Save
        </button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.energetika1Flow.map((transfer, i) => {
          return (
            <div key={i} className="mapedSpecE1">
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
        <h2>All Energetika1 so far: {props.energetika1}€</h2>
      </div>
    </div>
  );
}
