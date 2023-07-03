import React from 'react'

export default function NavBar(){
    return (
        <nav className='nav-bar'>
            <ul className='nav-list'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Payments</a></li>
                <li><a href='#'>Savings</a></li>
                <li><a href='#'>Financing</a></li>
                <li><a href='#'>Stocks</a></li>
            </ul>
        </nav>
    )
}