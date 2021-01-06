import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

export default function Home() {
    return (
        <div className='homeLayout'>
            <h1>Welcome to Your Wallet!</h1>
            <div className='grid-container'>
                <div className='item'><Link to='/hrana' style={{ textDecoration: 'none' }}>Hrana</Link></div>
                <div className='item'><Link to='/zajeb' style={{ textDecoration: 'none' }}>Zajeb</Link></div>
                <div className='item'><Link to='/tobak' style={{ textDecoration: 'none' }}>Tobak</Link></div>
                <div className='item'><Link to='/stroski' style={{ textDecoration: 'none' }}>Stroski</Link></div>
                <div className='item'><Link to='/drugo' style={{ textDecoration: 'none' }}>Drugo</Link></div>
                <div className='item'><Link to='/dopust' style={{ textDecoration: 'none' }}>Dopust</Link></div>
            </div>

            <h2><Link to='/addIncome' style={{ textDecoration: 'none' }}>Add Money to your account</Link></h2>
        </div>
    )
}
