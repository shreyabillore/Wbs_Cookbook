import React from 'react'
import { useContext } from 'react'
import { RecipeContext } from './RecipeContext'
import { Link, useParams,useHistory } from 'react-router-dom'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {MdOutlineFoodBank} from  "react-icons/md";
import {BiArrowBack} from  "react-icons/bi";


export default function RecipePage() {

    const {name} =useParams()
    const { recipe, setRecipe } = useContext(RecipeContext);

    console.log(name)
    console.log(recipe)
 

    const filteredRecipe = recipe.filter(el => el.fields.name === name);
    console.log(filteredRecipe)

    const history = useHistory()

    return (
        <div  className='recipeCardMain'>             
            {filteredRecipe.map((recipeData,idx) =>
           ( // <div key={idx} className='recipeCardMain' style={{ backgroundImage: `url(${recipeData?.fields?.image?.fields?.file?.url})`,height:'100%',width:'100%'}}>
                    <div key={idx} className='card'>
                            <div>
                                    <Link to="/"> <MdOutlineFoodBank className='home' /> </Link>
                                    <Link to="/cards">   <button  className='back' onClick={history.goBack} > <BiArrowBack /> </button>  </Link>
                            </div>
                            <div className='recipeImage1'>
                                <img src={recipeData?.fields?.image?.fields?.file?.url} alt=''/>
                             </div>
                            <div className='pic' style={{ backgroundImage: `url(${recipeData?.fields?.image?.fields?.file?.url})` }}>
                            </div>
                    <div key={idx} className='subCard'>
                           
                            <div className='title'>
                                  {recipeData.fields.name}
                            </div>
                            <div className='ingredients'>
                                <span>Ingredients</span>
                                <ul>
                                
                                    { (recipeData.fields.ingredients).map((item, index) => (
                                        <li>
                                            {item}
                                        </li>
                                        ))
                                    }
                                </ul>     
                            </div>
                            <div className='instructions'>        
                                 {documentToReactComponents(recipeData.fields.instructions)}                         
                            </div>
                   </div>
            </div> ))
                        
            }        

           
        </div>
    )
            
 }





/*  recipe?.map((item, idx) => (
                    <div key={idx} className='card'>
                        <p className='title'>  {item.fields.name} </p>
                          <img className='recipeImage'  src={item?.fields?.image?.fields?.file?.url} style={{ height: '200px', height: '200px' }} />
                      <div className='ingredients'>
                        <span>Ingredients</span>
                        <ul>
                          
                          { (item.fields.ingredients).map((item, index) => (
                              <li>
                                  {item}
                              </li>
                            ))
                          }
                        </ul>     
                      </div>
                      <div className='instructions'>        
                        <div>{documentToReactComponents(item.fields.instructions)}</div> 
                      </div>

                    </div>
                        ))  
                        
                        
                        /////////////////
                        {       recipe?.map((item, idx) =>  newArray = item.filter(el=>
                    {
                        return el.fields.name.includes(name)
                     }
                     )
            )
              
            }
        {console.log(newArray)}
                        
                        
                     {/* This what has been last done together 
             {recipe[3].map(recipe => (
                <>
                    <div className='recipeImage'>
                        <img src={item?.fields?.image?.fields?.file?.url} />
                    </div>
                    <div className='title'>
                       {recipe.fields.name}
                    </div>
                    <div className='ingredients'>
                      <span>Ingredients</span>
                        <ul>
                          
                          { (item.fields.ingredients).map((item, index) => (
                              <li>
                                  {item}
                              </li>
                            ))
                          }
                        </ul>     
                    </div>
                    <div className='instructions'>        
                        <div>{documentToReactComponents(item.fields.instructions)}</div> 
                    </div>
                    </div>

                </>
            ))} */