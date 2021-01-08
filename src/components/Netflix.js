import React from "react";
import "./Netflix.css";

export default function Netflix(props) {
  const addNetflix = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    let propsnetflixFlow = props.netflixFlow;
    props.setNetflix(props.netflix + amount);
    props.setMyMoney(props.myMoney - amount);
    props.setMyExpenses(props.myExpenses + amount);
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();
    date = dd + "/" + mm + "/" + yyyy;
    let id = propsnetflixFlow.length;
    props.setNetflixFlow([{ amount, date, id }, ...props.netflixFlow]);
    props.history.push("/expenses");
  };

  const deleteNetflix = (netflixId) => {
    let filteredNetflixs = props.netflixFlow.filter((lo1) => {
      return lo1.id !== netflixId;
    });
    props.setNetflixFlow(filteredNetflixs);
    let netflixsAmount = filteredNetflixs.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amount;
    },
    0);
    let propsnetflixFlow = props.netflixFlow;
    let allNetflixs = propsnetflixFlow.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.amount;
    }, 0);
    props.setNetflix(netflixsAmount);
    props.setMyMoney(props.myMoney + allNetflixs - netflixsAmount);
    props.setMyExpenses(props.myExpenses - allNetflixs + netflixsAmount)
  }

  return (
    <div>
      <form onSubmit={addNetflix} className="formNetflix">
        <input
          name="amount"
          type="text"
          placeholder="type Netflix €"
          className="inputNetflix"
        />
        <button type="submit" className="buttonNetflix">
          Save
        </button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.netflixFlow.map((transfer) => {
          return (
            <div key={transfer.id} className="mapedSpecNetflix">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Date: <b>{transfer.date}</b>
              </p>
              <button onClick={() => deleteNetflix(transfer.id)} className='deleteButtonNetflix' >Delete</button>
            </div>
          );
        })}
      </div>
      <div>
        <h2>All Netflix so far: {props.netflix}€</h2>
      </div>
    </div>
  );
}