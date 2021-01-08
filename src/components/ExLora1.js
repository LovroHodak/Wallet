import React from "react";
import './ExLora1.css'

export default function ExLora1(props) {
  const addLora1 = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    let propsexLora1Flow = props.exLora1Flow;
    props.setExLora1(props.exLora1 + amount);
    props.setMyMoney(props.myMoney - amount);
    props.setMyExpenses(props.myExpenses + amount)
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();
    date = dd + "/" + mm + "/" + yyyy;
    let id = propsexLora1Flow.length;
    props.setExLora1Flow([{amount, date, id}, ...props.exLora1Flow])
    props.history.push("/expenses");
  };

  const deleteExLora1 = (exLora1Id) => {
    let filteredExLora1s = props.exLora1Flow.filter((lo1) => {
      return lo1.id !== exLora1Id;
    });
    props.setExLora1Flow(filteredExLora1s);
    let exLora1sAmount = filteredExLora1s.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amount;
    },
    0);
    let propsexLora1Flow = props.exLora1Flow;
    let allExLora1s = propsexLora1Flow.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.amount;
    }, 0);
    props.setExLora1(exLora1sAmount);
    props.setMyMoney(props.myMoney + allExLora1s - exLora1sAmount);
    props.setMyExpenses(props.myExpenses - allExLora1s + exLora1sAmount)
  }

  return (
    <div>
      <form onSubmit={addLora1} className='formExL1'>
        <input name="amount" type="text" placeholder="type Lora1 €" className='inputExL1'/>
        <button type="submit" className='buttonExL1'>Save</button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.exLora1Flow.map((transfer) => {
          return (
            <div key={transfer.id} className="mapedSpecExL1">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Date: <b>{transfer.date}</b>
              </p>
              <button onClick={() => deleteExLora1(transfer.id)} className='deleteButtonExLora1' >Delete</button>
            </div>
          );
        })}
      </div>
      <div>
        <h2>All Lora1 so far: {props.exLora1}€</h2>
      </div>
    </div>
  );
}
