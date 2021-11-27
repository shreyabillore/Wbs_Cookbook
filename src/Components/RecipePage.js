// // version with local storage +  rcp state in fetch

import { marked } from 'marked';
import { useContext,useEffect } from 'react'
import { RecipeContext } from './RecipeContext'
import { Link, useParams,useHistory,Redirect } from 'react-router-dom'
import {MdOutlineFoodBank} from  "react-icons/md";
import {BiArrowBack} from  "react-icons/bi";
import { BiEdit } from 'react-icons/bi';
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {LoginForm} from './LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as contentful from 'contentful';


export default function RecipePage() {

     const { recipe, imageUrl, setImageUrl,updatedValue, setUpdatedValue, setRecipe,client} = useContext(RecipeContext);
 
    const contentful = require('contentful-management')
    const history = useHistory()
    const { entryId } = useParams()
    //const {title} =useParams()
    const [reload, setReload] = useState(false)
    const [deleteEntry, setDeletedeleteEntry] = useState(false)
    
    let recipeObject1
    let recipeObject2
    let filteredRecipe
    let imageObject1
    let filteredImage
    let title


    // When Recipe value from context is true 
    // 1.it will 1st set the local storage value from recipe
    // 2. applying filter on recipe & imageURL state

    if (recipe)
     {  
        console.log("Rcp value is True")
        console.log("Reload is", reload)
        //1.
        localStorage.setItem('recipeObject', JSON.stringify(recipe));
        localStorage.setItem('imageObject', JSON.stringify(imageUrl));
        //2.
        filteredRecipe = recipe.filter(el => el.sys.id === entryId);
        filteredImage = imageUrl.filter(el => el.sys.id === entryId);
    }
    
    // When Recipe value is false ideally when page is reloaded than it will 
    // 1. get the value from local storage 
    // 2. set the local storage value "recipeObject1 and imageObject1 " in recipe & image Url state respectively
    // 3. than applying filter on recipeObject1 & imageObject1

    else {
        console.log("Rcp value is Fasle")
        //1.
        recipeObject1 = JSON.parse(localStorage.getItem('recipeObject'));
        imageObject1 = JSON.parse(localStorage.getItem('imageObject'));

        //2.
        setRecipe(recipeObject1);
        setImageUrl(imageObject1)       
        
        //3.
        filteredRecipe = recipeObject1.filter(el => el.sys.id === entryId);
        filteredImage = imageObject1.filter(el => el.sys.id === entryId);

        console.log('recipeObject1 from LocalStorage: ', recipeObject1);
        console.log("rcp value is false and state after getitem", recipe)
        console.log("filteredRecipe in rcp false",filteredRecipe)
    }
    

    // Function will be called from LoginPage when close button will be clicked
    //  function accepting 2 arguments content_type and entryid of the Entry that has been updated in loginPage
    //  1. getting client entries acc. to content_type
    //      (a). setting recipe state with the entries provided by Promise
    //      (b). setting local storage with the entries provided by Promise
    //      (c). applying filter on recipeObject1 
   async function fetchData(content_type,entry_Id)
    {
       console.log("Fetch data")
       // 1.
       await client.getEntries({ content_type: content_type })
           .then(entries => {
               console.log("Fetched entry", entries.items);
               setRecipe(entries.items); // (a)
               localStorage.setItem('recipeObject', JSON.stringify(entries.items));  //  (b)
               filteredRecipe = recipe.filter(el => el.sys.id === entryId);     //  (c)
           })
           .catch(console.error)
       console.log("after fetch recipe state",recipe)
   
    }   
    
    console.log("entry id " ,entryId)
    console.log("rcp ", recipe)
 
    console.log("filteredRecipe" ,filteredRecipe)
    console.log("filteredImage ", filteredImage)
 
    //form data    

    const [show, setShow] = useState(false);
    
    const handleClose = () => { setUpdatedValue("a");setShow(!show)};
    const handleShow = () => setShow(true);
    
    let login;
      
    
    // function to delete an Specific Entry
   function handelDelete(entryId) {

       
       console.log(entryId)
       console.log('eneterd in delete')
       setDeletedeleteEntry(true);
          const contentful = require('contentful-management')
         let client = contentful.createClient({
               accessToken: 'CFPAT-S7a3BVzCXi9MYeCKIEHBr1ceLRf3G_XALB9kYvlQPAo'
            });
            client.getSpace('1w8dvqpp824f')
               .then((space) => space.getEnvironment('master'))
               .then((environment) => environment.getEntry(entryId))
               .then((entry) => entry.unpublish())
            
             client.getSpace('1w8dvqpp824f')
                 .then((space) => space.getEnvironment('master'))
                 .then((environment) => environment.getEntry(entryId))
           .then((entry) => entry.delete())
       

       localStorage.clear();
  
   }


    if (show) {
       
        login =  <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Recipe Update Form</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                         <LoginForm fetchData={fetchData} setReload1={ setReload} reload1={reload}  filteredImage={filteredImage} setShow={setShow} show={show}/>
                            
                            </Modal.Body>
                            
                        </Modal>
    }

    if (filteredRecipe[0].sys.contentType.sys.id === 'coffee')
    {
        console.log('Before REdirect')
        title = 'Coffee'
    } else if (filteredRecipe[0].sys.contentType.sys.id === 'drinks')
    {
        title = 'Drinks'
    } else if (filteredRecipe[0].sys.contentType.sys.id === 'dishes')
    {
        title = 'Dishes'
    }

    return (
        <div  className='recipeCardMain'>     

            
            {deleteEntry ? <Redirect from={`/receipedetail/${entryId}`} to="/" > Entry Deleted</Redirect>:

                <div key={Math.floor(Math.random()*200)} className='card'>
                            <div>
                                    <Link to="/"> <MdOutlineFoodBank className='home' /> </Link>
                                    <Link to="/cards">   <button  className='back' onClick={history.goBack} > <BiArrowBack /> </button>  </Link>
                            </div>

                            <div className='recipeImage1'>
                                <img src={filteredImage[0]?.fields?.file?.url} alt=''/>
                             </div>
                            <div className='pic' style={{ backgroundImage: `url(${filteredImage[0]?.fields?.file?.url})` }}>
                            </div>      
                    <div key={Math.floor(Math.random()*1000)} className='subCard'>
                           
                            <div className='title'>
                                  {filteredRecipe[0].fields.name}
                            </div>
                            <div className='ingredients'> 
                            <span>Ingredients:</span>
                                <ul>
                                
                                    { (filteredRecipe[0].fields.ingredients).map((item) => (
                                        <li key={Math.floor(Math.random()*100)}>
                                            {item}
                                        </li>   
                                        ))
                                    }
                                </ul>     
                            </div>
                            <span>Instructions</span>
                            <div className='instructions'  dangerouslySetInnerHTML={ { __html: marked(filteredRecipe[0].fields.instructions)} }>
                            </div>
                                                
                            <Button variant="primary" onClick={handleShow}>
                                Edit Recipe
                            </Button>
                        <Button variant="primary" onClick={() => {
                            console.log('Button');
                            handelDelete(entryId)
                        	 }}>
                                Delete Recipe
                            </Button>
                    
                           
                           {login}          
                    
                      {/*  <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Recipe Update Form</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <LoginForm setB={setB} filteredImage={filteredImage} setShow={setShow} show={show}/>
                            
                            </Modal.Body>
                            
                        </Modal>*/}
                   </div>
                 </div>    }
                       
        </div> //main div close
    )
            
 }

