import React from "react";
import "./Elektro.css";

export default function Elektro(props) {
  const addElektro = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    let propselektroFlow = props.elektroFlow;
    props.setElektro(props.elektro + amount);
    props.setMyMoney(props.myMoney - amount);
    props.setMyExpenses(props.myExpenses + amount);
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();
    date = dd + "/" + mm + "/" + yyyy;
    let id = propselektroFlow.length;
    props.setElektroFlow([{ amount, date, id }, ...props.elektroFlow]);
    props.history.push("/expenses");
  };

  const deleteElektro = (elektroId) => {
    let filteredElektros = props.elektroFlow.filter((lo1) => {
      return lo1.id !== elektroId;
    });
    props.setElektroFlow(filteredElektros);
    let elektrosAmount = filteredElektros.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amount;
    },
    0);
    let propselektroFlow = props.elektroFlow;
    let allElektros = propselektroFlow.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.amount;
    }, 0);
    props.setElektro(elektrosAmount);
    props.setMyMoney(props.myMoney + allElektros - elektrosAmount);
    props.setMyExpenses(props.myExpenses - allElektros + elektrosAmount)
  }

  return (
    <div>
      <form onSubmit={addElektro} className="formElektro">
        <input
          name="amount"
          type="text"
          placeholder="type Elektro €"
          className="inputElektro"
        />
        <button type="submit" className="buttonElektro">
          Save
        </button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.elektroFlow.map((transfer) => {
          return (
            <div key={transfer.id} className="mapedSpecElektro">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Date: <b>{transfer.date}</b>
              </p>
              <button onClick={() => deleteElektro(transfer.id)} className='deleteButtonElektro' >Delete</button>
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