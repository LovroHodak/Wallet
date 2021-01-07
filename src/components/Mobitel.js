import React from "react";
import "./Mobitel.css";

export default function Mobitel(props) {
  const addMobitel = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    props.setMobitel(props.mobitel + amount);
    props.setMyMoney(props.myMoney - amount);
    props.setMyExpenses(props.myExpenses + amount);
    let date = String(e.target.date.value);
    props.setMobitelFlow([{ amount, date }, ...props.mobitelFlow]);
    props.history.push("/expenses");
  };

  return (
    <div>
      <form onSubmit={addMobitel} className="formMobitel">
        <input
          name="amount"
          type="text"
          placeholder="type Mobitel €"
          className="inputMobitel"
        />
        <input
          name="date"
          type="text"
          placeholder="type date"
          className="inputMobitel"
        />
        <button type="submit" className="buttonMobitel">
          Save
        </button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.mobitelFlow.map((transfer, i) => {
          return (
            <div key={i} className="mapedSpecMobitel">
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
        <h2>All Mobitel so far: {props.mobitel}€</h2>
      </div>
    </div>
  );
}
