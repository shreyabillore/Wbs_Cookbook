import React,{useState,useEffect} from 'react';

import { useParams } from 'react-router-dom';
import * as contentful from 'contentful';
import { useContext } from 'react';
import { RecipeContext } from './RecipeContext';

import RecipeCard from './RecipeCard';
import './categoryStyling.css';

export default function CategoryMain() {
    const [filteredRecipe,setFilteredRecipe] = useState()
    const {title} =useParams()
    const { recipe,client } = useContext(RecipeContext);
    console.log(title.toLowerCase())
    console.log(recipe)

    useEffect(() => {        
        client.getEntries({ content_type: title.toLowerCase()}).then(entries => { setFilteredRecipe(entries.items); console.log(entries.items) }).catch(console.error)
           }, [])
           console.log(filteredRecipe)



    return (
        
        <div  className={ `${title==='Coffee'? "cardsPageMain" : "cardsPageMainAnother"} `}>


            {/* Right Div with Recipe Suggestions with Image and Title       style={{backgroundImage:'url("coffeeWallpaper.jpg")'}}*/} 

            <div className="cardsPageShape">
                <div className="cardsPageShapeInside">
                    {filteredRecipe?.map((item, idx) => (
                        <RecipeCard key={idx} titleInfo={item}/>
                    ))}                   
                    
                </div>
             </div>
        </div>
    
    )
}
