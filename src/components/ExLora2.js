import React from 'react'
import './ExLora2.css'

export default function ExLora2(props) {

    const addLora2 = (e) => {
        e.preventDefault();
        console.log(props);
        console.log(e.target.amount.value);
        let amount = Number(e.target.amount.value);
        props.setMyExLora2(props.myExLora2 + amount);
        props.setMyMoney(props.myMoney - amount);
        props.setMyExpenses(props.myExpenses + amount)
        let dateL2 = String(e.target.date.value)
        props.setLora2Flow([{amount, dateL2}, ...props.lora2Flow])
        props.history.push("/expenses");
      };

    return (
    <div>
      <form onSubmit={addLora2} className='formExL2'>
        <input name="amount" type="text" placeholder="type Lora2 €" className='inputExL2'/>
        <input name="date" type="text" placeholder="type date" className='inputExL2' />
        <button type="submit" className='buttonExL2'>Save</button>
      </form>
      <div>
        <h2>Last added: </h2>
        {props.lora2Flow.map((transfer, i) => {
          return (
            <div key={i} className="mapedSpecExL2">
              <p>
                Amount: <b>{transfer.amount}</b> €
              </p>
              <p>
                Date: <b>{transfer.dateL2}</b>
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <h2>All Lora2 so far: {props.myExLora2}€</h2>
      </div>
    </div>
    )
}
