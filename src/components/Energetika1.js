import React from "react";
import "./Energetika1.css";

export default function Energetika1(props) {
  const addEnergetika1 = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    let propsenergetika1Flow = props.energetika1Flow;
    props.setEnergetika1(props.energetika1 + amount);
    props.setMyMoney(props.myMoney - amount);
    props.setMyExpenses(props.myExpenses + amount);
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();
    date = dd + "/" + mm + "/" + yyyy;
    let id = propsenergetika1Flow.length;
    props.setEnergetika1Flow([{ amount, date, id }, ...props.energetika1Flow]);
    props.history.push("/expenses");
  };

  const deleteEnergetika1 = (energetika1Id) => {
    let filteredEnergetika1s = props.energetika1Flow.filter((lo1) => {
      return lo1.id !== energetika1Id;
    });
    props.setEnergetika1Flow(filteredEnergetika1s);
    let energetika1sAmount = filteredEnergetika1s.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amount;
    },
    0);
    let propsenergetika1Flow = props.energetika1Flow;
    let allEnergetika1s = propsenergetika1Flow.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.amount;
    }, 0);
    props.setEnergetika1(energetika1sAmount);
    props.setMyMoney(props.myMoney + allEnergetika1s - energetika1sAmount);
    props.setMyExpenses(props.myExpenses - allEnergetika1s + energetika1sAmount)
  }

  return (
    <div>
      <form onSubmit={addEnergetika1} className="formE1">
        <input
          name="amount"
          type="text"
          placeholder="type Energetika1 €"
          className="inputE1"
        />
        <button type="submit" className="buttonE1">
          Save
        </button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.energetika1Flow.map((transfer) => {
          return (
            <div key={transfer.id} className="mapedSpecE1">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Date: <b>{transfer.date}</b>
              </p>
              <button onClick={() => deleteEnergetika1(transfer.id)} className='deleteButtonEnergetika1' >Delete</button>
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
