// import React from "react";
// import { useEffect,useState } from "react";
// import * as contentful from 'contentful';

// export const ImageAsset = createContext();

// export default function ImageAsset({children}){

// const contentful = require('contentful')
// const [imageUrl, setImageUrl] = useState()

// const client = contentful.createClient({
//     accessToken: 'mtVUs8DgixmtCuq17IbC_zym_xveUEGkZa31X93vVK4',   // Management API Token
//     'Content-Type': 'asset',
//     space: '1w8dvqpp824f'
// })

// useEffect(() => {
//     client.getAssets().then(entries => { setImageUrl(entries.items); console.log(entries.items) }).catch(console.error)
//        }, [])

// console.log(imageUrl)


// // const asset = client.getAsset('1w8dvqpp824f')
// //   .then((asset) => console.log(asset.fields.file.url))

//     return(
//             <div>Hello</div>
//     )
// }