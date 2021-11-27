import React,{useState,useEffect} from 'react';
import {Pagination} from './Pagination';
import { useParams } from 'react-router-dom';
import * as contentful from 'contentful';
import { useContext } from 'react';
import { RecipeContext } from './RecipeContext';

import RecipeCard from './RecipeCard';
import './categoryStyling.css';

export default function CategoryMain() {



    let paginationAraay;
//   const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2)

    const [filteredRecipe,setFilteredRecipe] = useState()
    const {title} =useParams()
    const { recipe,client } = useContext(RecipeContext);
    console.log(title.toLowerCase())
    console.log(recipe)

    useEffect(() => {        
        client.getEntries({ content_type: title.toLowerCase()}).then(entries => { setFilteredRecipe(entries.items); console.log(entries.items) }).catch(console.error)
           }, [])
       

       


  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;  // 1*2 = 2
  const indexOfFirstPost = indexOfLastPost - postsPerPage; //2-2 = 0
  const currentPosts = filteredRecipe?.slice(indexOfFirstPost, indexOfLastPost); // array[0:2]  , 2 * 2 = 4 : 4-2 = 2

  console.log('currentpost:',currentPosts)
  console.log('indexOfLastPost:',indexOfLastPost)
  console.log('indexOfFirstPost:',indexOfFirstPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);




    return (
        <>
        <div  className={ `${title==='Coffee'? "cardsPageMain" : "cardsPageMainAnother"} `} >


            {/* Right Div with Recipe Suggestions with Image and Title       style={{backgroundImage:'url("coffeeWallpaper.jpg")'}}*/} 

            <div className="cardsPageShape" style={{display:'flex'}}>
                <div className="cardsPageShapeInside">
                    {currentPosts?.map((item, idx) => (
                        <RecipeCard key={idx} titleInfo={item}/>
                    ))} 
                                        
                </div>
                <Pagination postsPerPage={postsPerPage} totalPosts={filteredRecipe?.length} paginate={paginate}  />  
             </div>
            
        </div>
     
     </>
    )
}
