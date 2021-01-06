import React from "react";
import './ExLora1.css'

export default function ExLora1(props) {
  const addLora1 = (e) => {
    e.preventDefault();
    console.log(props);
    console.log(e.target.amount.value);
    let amount = Number(e.target.amount.value);
    props.setMyExLora1(props.myExLora1 + amount);
    props.setMyMoney(props.myMoney - amount);
    props.setMyExpenses(props.myExpenses + amount)
    let dateL1 = String(e.target.date.value)
    props.setLora1Flow([{amount, dateL1}, ...props.lora1Flow])
    props.history.push("/expenses");
  };

  return (
    <div>
      <form onSubmit={addLora1} className='formExL1'>
        <input name="amount" type="text" placeholder="type Lora1 €" className='inputExL1'/>
        <input name="date" type="text" placeholder="type date" className='inputExL1' />
        <button type="submit" className='buttonExL1'>Save</button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.lora1Flow.map((transfer, i) => {
          return (
            <div key={i} className="mapedSpecExL1">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Date: <b>{transfer.dateL1}</b>
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <h2>All Lora1 so far: {props.myExLora1}€</h2>
      </div>
    </div>
  );
}
