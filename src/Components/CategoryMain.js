import React,{useState,useEffect} from 'react';

import { useParams } from 'react-router-dom';
import * as contentful from 'contentful';

import RecipeCard from './RecipeCard';
import './categoryStyling.css';

export default function CategoryMain() {

    const {title} =useParams()
    const [recipe, setRecipe] = useState()
    
    console.log(title.toLowerCase())

     var client = contentful.createClient({
            space: '1w8dvqpp824f',
            accessToken: 'mtVUs8DgixmtCuq17IbC_zym_xveUEGkZa31X93vVK4'
    })
    
     useEffect(() => {        
         client.getEntries({ content_type: title.toLowerCase()}).then(entries => { setRecipe(entries.items); console.log(entries.items) }).catch(console.error)
            }, [])
    
   
    return (
        
        <div className="cardsPageMain">


            {/* Right Div with Recipe Suggestions with Image and Title       style={{backgroundImage:'url("coffeeWallpaper.jpg")'}}*/} 

            <div className="cardsPageShape">
                <div className="cardsPageShapeInside">
                    {recipe?.map((item, idx) => (
                        <RecipeCard recipe={item}/>
                    ))}                   
                    
                </div>
             </div>
        </div>
    
    )
}
