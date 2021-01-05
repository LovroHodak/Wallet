import React from "react";

export default function Zajeb(props) {
  const addZajeb = (e) => {
    e.preventDefault();
    let input = Number(e.target.adding.value);
    props.setMyMoney(props.myMoney - input);
    props.setMyZajeb(props.myZajeb + input);
    props.history.push("/");
  };

  return (
    <div>
      <form onSubmit={addZajeb}>
        <input name="adding" type="text" placeholder="add zajeb money amount" />
        <button type="submit">enter</button>
      </form>
      <div>
        <h2>My zajeb so far: {props.myZajeb}</h2>
      </div>
    </div>
  );
}
