import React from "react";
import "./Energetika2.css";

export default function Energetika2(props) {
  const addEnergetika2 = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    let propsenergetika2Flow = props.energetika2Flow;
    props.setEnergetika2(props.energetika2 + amount);
    props.setMyMoney(props.myMoney - amount);
    props.setMyExpenses(props.myExpenses + amount);
    let date = String(e.target.date.value);
    let id = propsenergetika2Flow.length;
    props.setEnergetika2Flow([{ amount, date, id }, ...props.energetika2Flow]);
    props.history.push("/expenses");
  };

  const deleteEnergetika2 = (energetika2Id) => {
    let filteredEnergetika2s = props.energetika2Flow.filter((lo1) => {
      return lo1.id !== energetika2Id;
    });
    props.setEnergetika2Flow(filteredEnergetika2s);
    let energetika2sAmount = filteredEnergetika2s.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amount;
    },
    0);
    let propsenergetika2Flow = props.energetika2Flow;
    let allEnergetika2s = propsenergetika2Flow.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.amount;
    }, 0);
    props.setEnergetika2(energetika2sAmount);
    props.setMyMoney(props.myMoney + allEnergetika2s - energetika2sAmount);
    props.setMyExpenses(props.myExpenses - allEnergetika2s + energetika2sAmount)
  }

  return (
    <div>
      <form onSubmit={addEnergetika2} className="formE1">
        <input
          name="amount"
          type="text"
          placeholder="type Energetika2 €"
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
        {props.energetika2Flow.map((transfer) => {
          return (
            <div key={transfer.id} className="mapedSpecE1">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Date: <b>{transfer.date}</b>
              </p>
              <button onClick={() => deleteEnergetika2(transfer.id)} className='deleteButtonEnergetika2' >Delete</button>
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
