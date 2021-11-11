import React from 'react'
import  './Home.css'

export default function Home(){



    return(
        <>
        <div className='parentContainer'>
        <div className='heading'>
        <h1>Harshita's and Shreya's CookBook</h1>
        <p>hello good morning</p>
        </div>
        <div className='navbar'>
            <div>Home</div>
            <div>Food Recepies</div>
            <div>Daily Special</div>
            <div>About us</div>
        </div>
        <div className='recepiesCategory'>
            <div>Coffee</div>
            <div>Dishes</div>
            <div>Drinks</div>
        </div>
        </div>

        </>
    )
}