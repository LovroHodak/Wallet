import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Expenses.css'

export default function Expenses(props) {

    useEffect(() => {
        console.log(props.myExpenses)
    })

    return (
        <div>
            <div className='grid-container-expenses'>
                <Link to='/expenses/lora1' style={{ textDecoration: 'none' }}><div className='itemEx'>Lora 1</div></Link>
                <Link to='/expenses/lora2' style={{ textDecoration: 'none' }}><div className='itemEx'>Lora 2</div></Link>
                <Link to='/expenses/energetika1' style={{ textDecoration: 'none' }}><div className='itemEx'>Energetika 1</div></Link>
                <Link to='/expenses/energetika2' style={{ textDecoration: 'none' }}><div className='itemEx'>Energetika 2</div></Link>
                <Link to='/expenses/elektro' style={{ textDecoration: 'none' }}><div className='itemEx'>Elektro</div></Link>
                <Link to='/expenses/rtv' style={{ textDecoration: 'none' }}><div className='itemEx'>Rtv</div></Link>
                <Link to='/expenses/internet' style={{ textDecoration: 'none' }}><div className='itemEx'>Internet</div></Link>
                <Link to='/expenses/mobitel' style={{ textDecoration: 'none' }}><div className='itemEx'>Mobitel</div></Link>
                <Link to='/expenses/netflix' style={{ textDecoration: 'none' }}><div className='itemEx'>Netflix</div></Link>
            </div>
            <h2>All Expenses so far: {props.myExpenses}€</h2>
        </div>
    )
}
