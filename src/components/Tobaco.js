import React from 'react'
import "./Tobaco.css";


export default function Tobaco(props) {

    const addTobaco = (e) => {
        e.preventDefault();
        let input = Number(e.target.addingTobaco.value);
        props.setMyMoney(props.myMoney - input);
        props.setMyTobaco(props.myTobaco + input);
        props.history.push("/");
    };

    return (
        <div className='tobacoDiv'>
            <form onSubmit={addTobaco} className='formTobaco'>
            <input name="addingTobaco" type="text" placeholder="add tobaco amount €" className='inputTobaco' />
            <button type="submit" className='buttonTobaco'>enter</button>
            </form>
            <div>
            <h2>My tobaco so far: {props.myTobaco}€</h2>
            </div>
        </div>
    )
}
