import React from 'react';
import { Link } from 'react-router-dom';
import { useContext,useEffect } from 'react';
import { RecipeContext } from './RecipeContext';

export default function RecipeCard({titleInfo}) {

   const { imageUrl } = useContext(RecipeContext);
  console.log(titleInfo.sys.contentType.sys.id)
  console.log(imageUrl)

    const filteredImage=  imageUrl.filter(el => el.fields.title === titleInfo.fields.name );
  console.log(filteredImage)

  console.log('filter daata',filteredImage[0]?.fields?.file?.url)  

  //    imageUrl.forEach((element,index) => { {element.fields.title === titleInfo[index].fields.name}
     
  //    return 
  // });


   return (
    // {people.filter(person => person.age < 60).map(filteredPerson => (
            <div key={titleInfo.sys.id} className='cards'>
              {/* <ImageAsset/> */}
               <div className='imageDiv'>
                 <img className='recipeImage' src={filteredImage[0]?.fields?.file?.url}
                   />
               </div>
               <div className='title' > {titleInfo.fields.name}
              <Link   to={`/receipedetail/${titleInfo.fields.name}`}> Let's try..</Link>
              </div>
            </div>
                    
   )
}
    
	
	
