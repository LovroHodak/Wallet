import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Welcome to Your Wallet!</h1>
            <h2>Add money:</h2>
            <Link to ='/addIncome'><p>Add Money to your account</p></Link>
            <h2>Categories:</h2>
            <Link to ='/hrana'><p>Hrana</p></Link>
            <Link to ='/zajeb'><p>Zajeb</p></Link>
        </div>
    )
}
