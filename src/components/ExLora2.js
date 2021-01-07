import React from "react";
import './ExLora1.css'

export default function ExLora2(props) {
  const addLora2 = (e) => {
    e.preventDefault();
    let amount = Number(e.target.amount.value);
    let propsexLora2Flow = props.exLora2Flow;
    props.setExLora2(props.exLora2 + amount);
    props.setMyMoney(props.myMoney - amount);
    props.setMyExpenses(props.myExpenses + amount)
    let dateL1 = String(e.target.date.value)
    let id = propsexLora2Flow.length;
    props.setExLora2Flow([{amount, dateL1, id}, ...props.exLora2Flow])
    props.history.push("/expenses");
  };

  const deleteExLora2 = (exLora2Id) => {
    let filteredExLora2s = props.exLora2Flow.filter((lo1) => {
      return lo1.id !== exLora2Id;
    });
    props.setExLora2Flow(filteredExLora2s);
    let exLora2sAmount = filteredExLora2s.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amount;
    },
    0);
    let propsexLora2Flow = props.exLora2Flow;
    let allExLora2s = propsexLora2Flow.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.amount;
    }, 0);
    props.setExLora2(exLora2sAmount);
    props.setMyMoney(props.myMoney + allExLora2s - exLora2sAmount);
    props.setMyExpenses(props.myExpenses - allExLora2s + exLora2sAmount)
  }

  return (
    <div>
      <form onSubmit={addLora2} className='formExL1'>
        <input name="amount" type="text" placeholder="type Lora2 €" className='inputExL1'/>
        <input name="date" type="text" placeholder="type date" className='inputExL1' />
        <button type="submit" className='buttonExL1'>Save</button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.exLora2Flow.map((transfer) => {
          return (
            <div key={transfer.id} className="mapedSpecExL1">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Date: <b>{transfer.dateL1}</b>
              </p>
              <button onClick={() => deleteExLora2(transfer.id)} className='deleteButtonExLora2' >Delete</button>
            </div>
          );
        })}
      </div>
      <div>
        <h2>All Lora2 so far: {props.exLora2}€</h2>
      </div>
    </div>
  );
}
