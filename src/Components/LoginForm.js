import React, { useState } from "react";
import { Dropdown,DropdownButton,Modal, Button, Form } from "react-bootstrap";
import { useContext , useEffect} from 'react'
import { useParams } from "react-router";
import { RecipeContext } from './RecipeContext'
import * as contentful from 'contentful'


                           
export const LoginForm = ({fetchData,setReload1,reload1,setShow,show}) => {
   
    const { recipe,updatedValue, setUpdatedValue,imageUrl } = useContext(RecipeContext)
    
    const { entryId } = useParams()
   
  
     const filteredRecipe = recipe.filter(el => el.sys.id === entryId);  

    const filteredImage= imageUrl.filter(el => el.sys.id === entryId);
  
    const [test, setTest] = useState({
      name: filteredRecipe[0].fields.name,
      ingredients: filteredRecipe[0].fields.ingredients,
      instructions: filteredRecipe[0].fields.instructions
    })
    console.log('the filter recipe',filteredRecipe)
 

   const handleChange = (val1) =>{
       console.log('handleChange function',filteredRecipe);

      const {name,ingredients,instructions} = test

       const concatFIlterArray = filteredRecipe;
       console.log('concatFIlterArray:',concatFIlterArray)
      
       const finalName = val1
    //    setTest({...test,name:finalName})
        console.log('test before:',test)
        console.log('filteredRecipe:',filteredRecipe) 
        setTest({name:finalName,ingredients:ingredients,instructions:instructions})  
        console.log('test after:',test)  
        
    }

    const handleIngredients = (val1) =>{
        console.log('handle scope data',filteredRecipe);
 
       const {name,ingredients,instructions} = test
 
        const concatFIlterArray = filteredRecipe;
        console.log('concatFIlterArray:',concatFIlterArray)
       
        const finalIngred = val1
        // setTest({...test,name:finalName})
        console.log('test before:',test)
        console.log('filteredRecipe:',filteredRecipe) 
        setTest({name:name,ingredients:finalIngred,instructions:instructions})  
        console.log('test after:',test)  
     }


     const handleInstructions = (val1) =>{
        console.log('handle scope data',filteredRecipe);
 
       const {name,ingredients,instructions} = test
 
        const concatFIlterArray = filteredRecipe;
        console.log('concatFIlterArray:',concatFIlterArray)
       
        const finalInstructions = val1
        // setTest({...test,name:finalName}) 
        console.log('test before:',test)
        console.log('filteredRecipe:',filteredRecipe) 
        setTest({name:name,ingredients:ingredients,instructions:finalInstructions})  
        console.log('test after:',test)  
     }

//on submit

let finalEntry
const onFormUpdate = (e) => {
    e.preventDefault();
    
    console.log('updated value ',test);
    console.log('filteredRecipe : ',filteredRecipe[0]);
    const contentful = require('contentful-management')
    let space
  
      async function Connect() {
          console.log('Inside COnnect')
          let client = await contentful.createClient({
            accessToken: 'CFPAT-S7a3BVzCXi9MYeCKIEHBr1ceLRf3G_XALB9kYvlQPAo'
  
          });
           space = await client.getSpace('1w8dvqpp824f');
          console.log(space)
          return space.getEnvironment('master')
      }
   
    async function UpdateCard(env, entryId) {
      console.log(space)
      await env.getEntry(entryId).then((entry) => {
        console.log(entry)
        entry.fields.name['en-US'] = test.name
          entry.fields.ingredients['en-US'] = test.ingredients
          entry.fields.instructions['en-US'] = test.instructions
        entry.update()
      })
  
      publish();
      
     
    }
  
   async function publish() {
      let client = contentful.createClient({
        accessToken: 'CFPAT-S7a3BVzCXi9MYeCKIEHBr1ceLRf3G_XALB9kYvlQPAo'
      });
     client.getSpace('1w8dvqpp824f').then((space) => space.getEnvironment('master'))
       .then((environment) => environment.getEntry(filteredRecipe[0].sys.id))
     //  .then((entry) => { entry.publish() })
       .then((entry) => { entry.publish(); console.log(entry); finalEntry = entry })
   }
  
    (async () => {
          console.log('calling COnnect')
          let env = await Connect();
          await UpdateCard(env,filteredRecipe[0].sys.id)
             })();
  

  };

// for close button
  const handleClose = () => {
    setShow(!show);
    setReload1(!reload1)
    console.log("In hadle close", reload1)
    fetchData(filteredRecipe[0].sys.contentType.sys.id)
  };


 

    return ( 
        <Form onSubmit={onFormUpdate} setF >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Recepie Name</Form.Label>
                <Form.Control type="text" placeholder="Normal text" defaultValue={filteredRecipe[0].fields.name}  onChange={(e)=> handleChange(e.target.value)} />
  <br />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Recipe Category  </Form.Label>
                <Form.Label>   {filteredRecipe[0].sys.contentType.sys.id}</Form.Label>
                <Form.Control type="text" placeholder="Normal text" defaultValue={filteredRecipe[0].sys.contentType.sys.id} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Ingredients</Form.Label>
                <Form.Control as="textarea" rows={3} defaultValue={filteredRecipe[0].fields.ingredients} onChange={(e)=> {let array = e.target.value.split(',');handleIngredients(array)}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Instructions</Form.Label>
                <Form.Control as="textarea" rows={3} defaultValue={filteredRecipe[0].fields.instructions} onChange={(e)=>{ handleInstructions(e.target.value)}}/>
            </Form.Group>
            <Button variant="primary" type="submit" block>
                Update
        </Button>
          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose} reLoadStatus="DataUpdated">
                                Close Form
                            </Button>
                            </Modal.Footer>
            
      </Form>
      
    );
};


