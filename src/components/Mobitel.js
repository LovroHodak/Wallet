import React from "react";
import "./Mobitel.css";

export default function Mobitel(props) {
  const addMobitel = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    let propsmobitelFlow = props.mobitelFlow;
    props.setMobitel(props.mobitel + amount);
    props.setMyMoney(props.myMoney - amount);
    props.setMyExpenses(props.myExpenses + amount);
    let date = String(e.target.date.value);
    let id = propsmobitelFlow.length;
    props.setMobitelFlow([{ amount, date, id }, ...props.mobitelFlow]);
    props.history.push("/expenses");
  };

  const deleteMobitel = (mobitelId) => {
    let filteredMobitels = props.mobitelFlow.filter((lo1) => {
      return lo1.id !== mobitelId;
    });
    props.setMobitelFlow(filteredMobitels);
    let mobitelsAmount = filteredMobitels.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amount;
    },
    0);
    let propsmobitelFlow = props.mobitelFlow;
    let allMobitels = propsmobitelFlow.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.amount;
    }, 0);
    props.setMobitel(mobitelsAmount);
    props.setMyMoney(props.myMoney + allMobitels - mobitelsAmount);
    props.setMyExpenses(props.myExpenses - allMobitels + mobitelsAmount)
  }

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
        {props.mobitelFlow.map((transfer) => {
          return (
            <div key={transfer.id} className="mapedSpecMobitel">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Date: <b>{transfer.date}</b>
              </p>
              <button onClick={() => deleteMobitel(transfer.id)} className='deleteButtonMobitel' >Delete</button>
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