import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
   console.log(recipe)
   console.log(recipe.fields.name)

   return (
            <div key={recipe.fields.id} className='cards'>
               <div className='imageDiv'>
                 <img className='recipeImage' src={recipe?.fields?.image?.fields?.file?.url}
                   />
               </div>
               <div className='title'> {recipe.fields.name}</div>
               
              <Link to={`/receipedetail/${recipe.fields.name}`}> Let's try..</Link>
            </div>
                    
   )
}
    