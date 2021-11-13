import React from 'react'
import {Link} from 'react-router-dom'


function CategoryLinks({Icon,title}) {
  console.log(title)
    return (
        <div className='sidebarRow'>
            <Icon/>
            <Link to={`/cards/${title}`} style={{ textDecoration: 'none', color:'#00acee'}}> <h4>{title}</h4> </Link>
        </div>
    )
}

export default CategoryLinks