import { client } from "./client";
import React,{useEffect,useState} from 'react'

export default function App() {
  const[recepies,setRecepies] = useState()

  useEffect(() => {
    client.getEntries({ content_type:'recepies'}).then((response)=> {setRecepies(response.items) ;console.log(response.items[0].fields.image)}).catch(console.error);
    
  }, [])


  return(
    <>
     <h1>Cook Book</h1>
{ recepies?.map((ele,index) => (  
      <div key={index}>   
      <h1>{ele.fields.name}</h1>
      <img src={ele?.fields?.image?.fields?.file?.url} alt={ele.fields.name}></img>
      <div>{ele.fields.description}</div> <br/>
      </div>))}
      </>
  )

}