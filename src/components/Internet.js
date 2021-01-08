import React from "react";
import "./Internet.css";

export default function Internet(props) {
  const addInternet = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    let propsinternetFlow = props.internetFlow;
    props.setInternet(props.internet + amount);
    props.setMyMoney(props.myMoney - amount);
    props.setMyExpenses(props.myExpenses + amount);
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();
    date = dd + "/" + mm + "/" + yyyy;
    let id = propsinternetFlow.length;
    props.setInternetFlow([{ amount, date, id }, ...props.internetFlow]);
    props.history.push("/expenses");
  };

  const deleteInternet = (internetId) => {
    let filteredInternets = props.internetFlow.filter((lo1) => {
      return lo1.id !== internetId;
    });
    props.setInternetFlow(filteredInternets);
    let internetsAmount = filteredInternets.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amount;
    },
    0);
    let propsinternetFlow = props.internetFlow;
    let allInternets = propsinternetFlow.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.amount;
    }, 0);
    props.setInternet(internetsAmount);
    props.setMyMoney(props.myMoney + allInternets - internetsAmount);
    props.setMyExpenses(props.myExpenses - allInternets + internetsAmount)
  }

  return (
    <div>
      <form onSubmit={addInternet} className="formInternet">
        <input
          name="amount"
          type="text"
          placeholder="type Internet €"
          className="inputInternet"
        />
        <button type="submit" className="buttonInternet">
          Save
        </button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.internetFlow.map((transfer) => {
          return (
            <div key={transfer.id} className="mapedSpecInternet">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Date: <b>{transfer.date}</b>
              </p>
              <button onClick={() => deleteInternet(transfer.id)} className='deleteButtonInternet' >Delete</button>
            </div>
          );
        })}
      </div>
      <div>
        <h2>All Internet so far: {props.internet}€</h2>
      </div>
    </div>
  );
}