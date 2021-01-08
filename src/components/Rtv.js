import React from "react";
import "./Rtv.css";

export default function Rtv(props) {
  const addRtv = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    let propsrtvFlow = props.rtvFlow;
    props.setRtv(props.rtv + amount);
    props.setMyMoney(props.myMoney - amount);
    props.setMyExpenses(props.myExpenses + amount);
    let date = String(e.target.date.value);
    let id = propsrtvFlow.length;
    props.setRtvFlow([{ amount, date, id }, ...props.rtvFlow]);
    props.history.push("/expenses");
  };

  const deleteRtv = (rtvId) => {
    let filteredRtvs = props.rtvFlow.filter((lo1) => {
      return lo1.id !== rtvId;
    });
    props.setRtvFlow(filteredRtvs);
    let rtvsAmount = filteredRtvs.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amount;
    },
    0);
    let propsrtvFlow = props.rtvFlow;
    let allRtvs = propsrtvFlow.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.amount;
    }, 0);
    props.setRtv(rtvsAmount);
    props.setMyMoney(props.myMoney + allRtvs - rtvsAmount);
    props.setMyExpenses(props.myExpenses - allRtvs + rtvsAmount)
  }

  return (
    <div>
      <form onSubmit={addRtv} className="formRtv">
        <input
          name="amount"
          type="text"
          placeholder="type Rtv €"
          className="inputRtv"
        />
        <input
          name="date"
          type="text"
          placeholder="type date"
          className="inputRtv"
        />
        <button type="submit" className="buttonRtv">
          Save
        </button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.rtvFlow.map((transfer) => {
          return (
            <div key={transfer.id} className="mapedSpecRtv">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Date: <b>{transfer.date}</b>
              </p>
              <button onClick={() => deleteRtv(transfer.id)} className='deleteButtonRtv' >Delete</button>
            </div>
          );
        })}
      </div>
      <div>
        <h2>All Rtv so far: {props.rtv}€</h2>
      </div>
    </div>
  );
}