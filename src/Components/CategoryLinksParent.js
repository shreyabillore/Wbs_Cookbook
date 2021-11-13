import React from 'react'
import { SiCoffeescript } from 'react-icons/si'
import {GiNoodles} from 'react-icons/gi'
import { FaCocktail } from 'react-icons/fa'
import CatoryLinks from './CategoryLinks'


function CategoryLinksParent() {

    return (
        <div className='sidebar'> 
          <CatoryLinks Icon={SiCoffeescript} title='Coffee' /> 
          
          <CatoryLinks Icon={GiNoodles} title='Dishes' />
          <CatoryLinks Icon={FaCocktail} title='Drinks'/>
        
        </div>
    )
}

export default CategoryLinksParent