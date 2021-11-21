import React from 'react'
import  './Home.css'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import CategoryLinksParent from './CategoryLinksParent'
import {GiChefToque} from 'react-icons/gi'

export default function Home(){

    return(
        <>
            <div className='parentContainer'>
            <div className='heading'>
            <h1><GiChefToque/>Cook with HaSh</h1>
            <p style={{fontFamily:'cursive'}}>Eat Sleep Repeat!!</p>
            </div>
            <div className='navbar'>
                <div>Home</div>
                <div>Food Recipes</div>
                <Link to='/addrecipe' style={{textDecoration:'none'}}>Add Recipes</Link>
                <div>About us</div>
            </div>
            <div className='recepiesCategory'>   
                <CategoryLinksParent/>            
            </div>
            </div>
        </>
    )
}