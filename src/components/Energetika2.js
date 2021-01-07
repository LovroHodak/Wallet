import React from "react";
import "./Energetika2.css";

export default function Energetika2(props) {
  const addEnergetika2 = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    props.setEnergetika2(props.energetika2 + amount);
    props.setMyMoney(props.myMoney - amount);
    props.setMyExpenses(props.myExpenses + amount);
    let date = String(e.target.date.value);
    props.setEnergetika2Flow([{ amount, date }, ...props.energetika2Flow]);
    props.history.push("/expenses");
  };

  return (
    <div>
      <form onSubmit={addEnergetika2} className="formE2">
        <input
          name="amount"
          type="text"
          placeholder="type Energetika2 €"
          className="inputE2"
        />
        <input
          name="date"
          type="text"
          placeholder="type date"
          className="inputE2"
        />
        <button type="submit" className="buttonE2">
          Save
        </button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.energetika2Flow.map((transfer, i) => {
          return (
            <div key={i} className="mapedSpecE2">
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
        <h2>All Energetika2 so far: {props.energetika2}€</h2>
      </div>
    </div>
  );
}

