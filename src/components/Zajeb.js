import React from "react";
import "./Zajeb.css";

export default function Zajeb(props) {
  const addZajeb = (e) => {
    e.preventDefault();
    let input = Number(e.target.adding.value);
    props.setMyMoney(props.myMoney - input);
    props.setMyZajeb(props.myZajeb + input);
    props.history.push("/");
  };

  return (
    <div className='zajebDiv'>
      <form onSubmit={addZajeb} className='formZajeb'>
        <input name="adding" type="text" placeholder="add fuck It amount €" className='inputZajeb' />
        <button type="submit" className='buttonZajeb'>enter</button>
      </form>
      <div>
        <h2>My zajeb so far: {props.myZajeb}€</h2>
      </div>
    </div>
  );
}
