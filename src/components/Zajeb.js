import React from "react";
import "./Zajeb.css";

export default function Zajeb(props) {
  const addZajeb = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    let propszajebFlow = props.zajebFlow;
    props.setMyMoney(props.myMoney - amount);
    props.setMyZajeb(props.myZajeb + amount);

    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();
    date = dd + "/" + mm + "/" + yyyy;

    let id = propszajebFlow.length;
    props.setZajebFlow([{ amount, date, id }, ...propszajebFlow]);

    props.history.push("/");
  };

  const deleteZajeb = (zajebId) => {
    let filteredZajebs = props.zajebFlow.filter((oth) => {
      return oth.id !== zajebId;
    });
    props.setZajebFlow(filteredZajebs);
    let zajebsAmount = filteredZajebs.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amount;
    },
    0);
    let propszajebFlow = props.zajebFlow;
    let allZajebs = propszajebFlow.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amount;
    },
    0);
    props.setMyZajeb(zajebsAmount);
    props.setMyMoney(props.myMoney + allZajebs - zajebsAmount);
  };

  return (
    <div className="zajebDiv">
      <form onSubmit={addZajeb} className="formZajeb">
        <input
          name="amount"
          type="text"
          placeholder="add Zajeb amount €"
          className="inputZajeb"
        />
        <button type="submit" className="buttonZajeb">
          enter
        </button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.zajebFlow.map((transfer) => {
          return (
            <div key={transfer.id} className="mapedSpecZajeb">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Date: <b>{transfer.date}</b>
              </p>
              <button
                onClick={() => deleteZajeb(transfer.id)}
                className="deleteButtonZajeb"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h2>My Zajeb so far: {props.myZajeb}€</h2>
      </div>
    </div>
  );
}
