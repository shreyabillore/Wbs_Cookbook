

import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Link, useParams } from 'react-router-dom';
import * as contentful from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function RecipePage() {
    const {recipeData} =useParams()

    return()
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
              ))  */