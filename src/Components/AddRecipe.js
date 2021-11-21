import React from 'react'
import './AddRecipe.css'
import { useState } from 'react'
import * as contentful from 'contentful';
import { createClient } from 'contentful-management'
import { useEffect } from 'react';
import { GiConsoleController } from 'react-icons/gi';


export default function AddRecipe() {

    //creating client for contentful and fetching env

    const[thank,setThank] = useState();
    const contentful = require('contentful-management');

    const client = contentful.createClient({
        accessToken: 'CFPAT-J1UqC_BAJJPr6jQe4i60AeEgBa32I05CWljv5CRA8g0',
        XContentfulContentType: 'coffee'
    })

    //state defnition
    
    const [addRecipie, setAddRecipie] = useState({
        name: '',
        contentTypedata:'',
        image: '',
        ingredients:[],
        instructions: '',  
    })

   
    // Entry creation on submit

    function handleClick() {
      setThank('Thank you for your contribution!!')
      console.log('aray data:',addRecipie.ingredients)
        client.getSpace('1w8dvqpp824f')
        .then((space) => space.getEnvironment('master'))
        .then((environment) => environment.createEntryWithId(addRecipie.contentTypedata, `content${Math.floor(Math.random()*100)}`, {
          fields: 
          {name: { 'en-US': addRecipie.name },
           ingredients: { 'en-US': [addRecipie.ingredients] },
           instructions:{'en-US':addRecipie.instructions},
          }})).then((entry) => entry.publish()).then((entry) => console.log(entry))
        .catch(console.error)

        updateImageUrl();

        setAddRecipie({name:'',
        contentTypedata:'Please select option',
        image: '',
        ingredients:[],
        instructions: '',  })
    }


    //Create Asset(image upload)

function updateImageUrl()

{client.getSpace('1w8dvqpp824f')
.then((space) => space.getEnvironment('master'))
.then((environment) => environment.createAsset({
  fields: {
    title: {
      'en-US': addRecipie.name
    },
    description: {
      'en-US': `This is ${addRecipie.name}`
    },
    file: {
      'en-US': {
        contentType: 'image/jpeg',
        fileName: `${addRecipie.name}.jpeg`,
        upload: addRecipie.image
      }
    }
  }
}))
.then((asset) => asset.processForAllLocales()).then((asset) => asset.publish())
.then((asset) => console.log(asset))
.catch(console.error)

}


    return(
        <div className='addRecipeParent' >
          <div className='thankYou' style={{position:'relative',top:'25vh',left:'10vw'}}><h1>{thank}</h1></div>
            <div className='addInput' >
                <div className='formMain' >
                  <form >
                    <label>Recipe Name: </label>
                    <input type="text" name="name" value={addRecipie.name}  onChange={(e) => setAddRecipie({ ...addRecipie, name: e.target.value })} />
                        <label for="cars">Choose type of recipe:</label>
                        <select name="contentTpe" value={addRecipie.contentTypedata} onChange={(e) => setAddRecipie({...addRecipie,contentTypedata:e.target.value})} >
                            <option value="Please select option">Please select option</option>
                            <option value="coffee">Coffee</option>
                            <option value="dishes" >Dishes</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    <label>Image Url: </label>
                    <input type="text" name="name" value={addRecipie.image} onChange={(e) => setAddRecipie({ ...addRecipie, image: e.target.value })} />
                    <label>Ingredients: </label>
                    <textarea type="text" name="name" value={addRecipie.ingredients} onChange={(e) => setAddRecipie({ ...addRecipie, ingredients: e.target.value })} />
                    <label>Instructions: </label>
                    <textarea type="text" name="name" value={addRecipie.instructions} onChange={(e) => setAddRecipie({ ...addRecipie, instructions: e.target.value })} />
                    {/* <input type="text" name="name" onChange={(e) => setAddRecipie({...addRecipie,url:e.target.value})} /> */}
                    <button type='button' onClick={() => handleClick()}>  Submit </button>
                    </form>
              </div>
            </div>
        </div>
    )
}
