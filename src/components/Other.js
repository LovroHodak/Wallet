import React from "react";
import "./Other.css";

export default function Other(props) {
  const addOther = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    let propsotherFlow = props.otherFlow;
    props.setOther(props.other + amount);
    props.setMyMoney(props.myMoney - amount);

    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();
    date = dd + "/" + mm + "/" + yyyy;

    let name = String(e.target.name.value);
    let id = propsotherFlow.length;
    props.setOtherFlow([{ amount, date, name, id }, ...propsotherFlow]);
    props.history.push("/");
  };

  const deleteOther = (otherId) => {
    let filteredOthers = props.otherFlow.filter((oth) => {
      return oth.id !== otherId;
    });
    props.setOtherFlow(filteredOthers);
    let othersAmount = filteredOthers.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amount;
    },
    0);
    let propsotherFlow = props.otherFlow;
    let allOthers = propsotherFlow.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.amount;
    }, 0);
    props.setOther(othersAmount);
    props.setMyMoney(props.myMoney + allOthers - othersAmount);
  };

  return (
    <div>
      <form onSubmit={addOther} className="formOther">
        <input
          name="amount"
          type="text"
          placeholder="type Other €"
          className="inputOther"
        />
        <input
          name="name"
          type="text"
          placeholder="type name"
          className="inputOther"
        />
        <button type="submit" className="buttonOther">
          Save
        </button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.otherFlow.map((transfer) => {
          return (
            <div key={transfer.id} className="mapedSpecOther">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Name: <b>{transfer.name}</b>
              </p>
              <p>
                Date: <b>{transfer.date}</b>
              </p>
              <button onClick={() => deleteOther(transfer.id)} className='deleteButtonOther' >Delete</button>
            </div>
          );
        })}
      </div>
      <div>
        <h2>All Other so far: {props.other}€</h2>
      </div>
    </div>
  );
}
