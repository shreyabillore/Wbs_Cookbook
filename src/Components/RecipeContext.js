
            
import React, {useState,createContext,useEffect} from 'react'
import * as contentful from 'contentful';

export const RecipeContext = createContext();

export default function RecipeContextProvider({children}){

    const [recipe, setRecipe] = useState()
    const [imageUrl, setImageUrl] = useState()

    var client = contentful.createClient({
        space: '1w8dvqpp824f',
        accessToken: 'mtVUs8DgixmtCuq17IbC_zym_xveUEGkZa31X93vVK4'
})


const client_image = contentful.createClient({
  accessToken: 'mtVUs8DgixmtCuq17IbC_zym_xveUEGkZa31X93vVK4',   // Management API Token
  'Content-Type': 'asset',
  space: '1w8dvqpp824f'
})
       useEffect(() => {
        client.getEntries().then(entries => { setRecipe(entries.items); console.log(entries.items) }).catch(console.error);
        client_image.getAssets().then(entries => { setImageUrl(entries.items); console.log(entries.items) }).catch(console.error)
           }, [])


        
        // useEffect(() => {
        //   client_image.getAssets().then(entries => { setImageUrl(entries.items); console.log(entries.items) }).catch(console.error)
        //        }, [])
        
        console.log(imageUrl)

       return (
        <RecipeContext.Provider value={{recipe,setRecipe,imageUrl,client}} >
          {children} 
        </RecipeContext.Provider>
     )

}