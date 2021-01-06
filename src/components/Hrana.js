import React from "react";
import "./Hrana.css";

export default function Hrana(props) {
  const addHrana = (e) => {
    e.preventDefault();
    let input = Number(e.target.adding.value);
    props.setMyMoney(props.myMoney - input);
    props.setMyHrana(props.myHrana + input);
    props.history.push("/");
  };

  return (
    <div className='hranaDiv'>
      <form onSubmit={addHrana} className='formFood'>
        <input name="adding" type="text" placeholder="add food amount €" className='inputFood' />
        <button type="submit" className='buttonFood'>enter</button>
      </form>
      <div>
        <h2>My food so far: {props.myHrana}€</h2>
      </div>
    </div>
  );
}
