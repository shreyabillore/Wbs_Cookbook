
            
import React, {useState,createContext,useEffect} from 'react'
import * as contentful from 'contentful';

export const RecipeContext = createContext();

export default function RecipeContextProvider({children}){

    const [recipe, setRecipe] = useState()

    var client = contentful.createClient({
        space: '1w8dvqpp824f',
        accessToken: 'mtVUs8DgixmtCuq17IbC_zym_xveUEGkZa31X93vVK4'
})

       useEffect(() => {
        client.getEntries().then(entries => { setRecipe(entries.items); console.log(entries.items) }).catch(console.error)
           }, [])



       return (
        <RecipeContext.Provider value={{recipe,setRecipe}} >
          {children} 
        </RecipeContext.Provider>
     )

}