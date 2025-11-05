import React from 'react'
import luffy from './assets/lufffy.webp'
import './css/Home.css'
const Home = () => {
    return (
        <div className='home'>
            <h1> 
                welcome to my website
            </h1> 
            <div>
            <img src= {luffy} alt="" />
            </div>
        </div>

    )
}