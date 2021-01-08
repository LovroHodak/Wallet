import React from "react";
import "./Hrana.css";

export default function Hrana(props) {
  const addHrana = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    let propshranaFlow = props.hranaFlow;
    props.setMyMoney(props.myMoney - amount);
    props.setMyHrana(props.myHrana + amount);

    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();
    date = dd + "/" + mm + "/" + yyyy;

    let id = propshranaFlow.length;
    props.setHranaFlow([{ amount, date, id }, ...propshranaFlow]);

    props.history.push("/");
  };

  const deleteHrana = (hranaId) => {
    let filteredHranas = props.hranaFlow.filter((oth) => {
      return oth.id !== hranaId;
    });
    props.setHranaFlow(filteredHranas);
    let hranasAmount = filteredHranas.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amount;
    },
    0);
    let propshranaFlow = props.hranaFlow;
    let allHranas = propshranaFlow.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amount;
    },
    0);
    props.setMyHrana(hranasAmount);
    props.setMyMoney(props.myMoney + allHranas - hranasAmount);
  };

  return (
    <div className="hranaDiv">
      <form onSubmit={addHrana} className="formHrana">
        <input
          name="amount"
          type="text"
          placeholder="add Hrana amount €"
          className="inputHrana"
        />
        <button type="submit" className="buttonHrana">
          enter
        </button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.hranaFlow.map((transfer) => {
          return (
            <div key={transfer.id} className="mapedSpecHrana">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Date: <b>{transfer.date}</b>
              </p>
              <button
                onClick={() => deleteHrana(transfer.id)}
                className="deleteButtonHrana"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h2>My Hrana so far: {props.myHrana}€</h2>
      </div>
    </div>
  );
}
