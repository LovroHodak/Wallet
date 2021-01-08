import React from "react";
import "./AddIncome.css";

export default function AddIncome(props) {
  const addMoney = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    let propsmoneyFlow = props.moneyFlow;
    let name = String(e.target.name.value);
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();
    date = dd + "/" + mm + "/" + yyyy;
    let id = propsmoneyFlow.length;
    props.setMoneyFlow([{ amount, name, date, id }, ...props.moneyFlow]);
    let allAddedMoney = Number(props.addedMoney);
    props.setAddedMoney(allAddedMoney + amount);
    let myMoneyNumber = Number(props.myMoney);
    props.setMyMoney(myMoneyNumber + amount);
    props.history.push("/");
  };

  const deleteMoney = (moneyId) => {
    let filteredMoney = props.moneyFlow.filter((mon) => {
      return mon.id !== moneyId;
    });
    props.setMoneyFlow(filteredMoney);

    let addedAmount = filteredMoney.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amount;
    },
    0);
    let propsmoneyFlow = props.moneyFlow;
    let allMoney = propsmoneyFlow.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.amount;
    }, 0);
    props.setAddedMoney(addedAmount);
    props.setMyMoney(props.myMoney - allMoney + addedAmount);
  };

  return (
    <div>
      <form onSubmit={addMoney} className="input-forms">
        <input
          name="amount"
          type="text"
          placeholder="type amount €"
          className="inputs"
        />
        <input
          name="name"
          type="text"
          placeholder="type name"
          className="inputs"
        />
        <button type="submit" className="inputs">
          Add Money
        </button>
      </form>

      <div>
        <h2>Last added money: </h2>
        {props.moneyFlow.map((transfer) => {
          return (
            <div key={transfer.id} className="mapedSpec">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Name: <b>{transfer.name}</b>
              </p>
              <p>
                Date: <b>{transfer.date}</b>
              </p>
              <button
                onClick={() => deleteMoney(transfer.id)}
                className="deleteButtonMoney"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h2>All money added so far: {props.addedMoney}</h2>
      </div>
    </div>
  );
}
