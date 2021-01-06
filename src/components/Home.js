import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

export default function Home() {
    return (
        <div className='homeLayout'>
            <h1>Welcome to Your Wallet!</h1>
            <div className='grid-container'>
                <Link to='/hrana' style={{ textDecoration: 'none' }}><div className='item'>Food</div></Link>
                <Link to='/zajeb' style={{ textDecoration: 'none' }}><div className='item'>Fuck It</div></Link>
                <Link to='/tobaco' style={{ textDecoration: 'none' }}><div className='item'>Tobaco</div></Link>
                <Link to='/expenses' style={{ textDecoration: 'none' }}><div className='item'>Expenses</div></Link>
                <Link to='/other' style={{ textDecoration: 'none' }}><div className='item'>Other</div></Link>
                <Link to='/vacation' style={{ textDecoration: 'none' }}><div className='item'>Vacation</div></Link>
            </div>

            <Link to='/addIncome' style={{ textDecoration: 'none' }}><h2>Add Money to your account</h2></Link>
        </div>
    )
}
