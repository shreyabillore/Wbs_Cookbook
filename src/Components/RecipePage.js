import React from 'react';
import { marked } from 'marked';
import { useContext } from 'react'
import { RecipeContext } from './RecipeContext'
import { Link, useParams,useHistory } from 'react-router-dom'
import {MdOutlineFoodBank} from  "react-icons/md";
import {BiArrowBack} from  "react-icons/bi";

export default function RecipePage() {

    const {name} =useParams()
    const { recipe, setRecipe,imageUrl,SetImageUrl } = useContext(RecipeContext);

    console.log(name)
    console.log(recipe)
    console.log(imageUrl)
 

    const filteredRecipe = recipe.filter(el => el.fields.name === name);
    console.log(filteredRecipe)
    const filteredImage= imageUrl.filter(el => el.fields.title === name);
    
    console.log(filteredImage)

    const history = useHistory()

    return (
        <div  className='recipeCardMain'>             
            {/* {filteredRecipe[0].map((recipeData,idx) => */}
           {/* ( // <div key={idx} className='recipeCardMain' style={{ backgroundImage: `url(${recipeData?.fields?.image?.fields?.file?.url})`,height:'100%',width:'100%'}}> */}
                    <div key={Math.floor(Math.random()*100)} className='card'>
                            <div>
                                    <Link to="/"> <MdOutlineFoodBank className='home' /> </Link>
                                    <Link to="/cards">   <button  className='back' onClick={history.goBack} > <BiArrowBack /> </button>  </Link>
                            </div>

                            <div className='recipeImage1'>
                                <img src={filteredImage[0]?.fields?.file?.url} alt=''/>
                             </div>
                            <div className='pic' style={{ backgroundImage: `url(${filteredImage[0]?.fields?.file?.url})` }}>
                            </div>
                           
                            
                    <div key={Math.floor(Math.random()*100)} className='subCard'>
                           
                            <div className='title'>
                                  {filteredRecipe[0].fields.name}
                            </div>
                            <div className='ingredients'>
                                <span>Ingredients</span>
                                <ul>
                                
                                    { (filteredRecipe[0].fields.ingredients).map((item) => (
                                        <li key={Math.floor(Math.random()*100)}>
                                            {item}
                                        </li>
                                        ))
                                    }
                                </ul>     
                            </div>
                            <div className='instructions'  dangerouslySetInnerHTML={ { __html: marked(filteredRecipe[0].fields.instructions)} }>                                    
                            </div>
                   </div>
            </div> 
            {/* ))}         */}

           
        </div>
    )
            
 }



