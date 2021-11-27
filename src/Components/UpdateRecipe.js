import React from 'react'

function UpdateRecipe() {

    const client = contentful.createClient({
        accessToken: 'CFPAT-J1UqC_BAJJPr6jQe4i60AeEgBa32I05CWljv5CRA8g0',
        XContentfulContentType: 'coffee'
    })


        
// Update entry
client.getSpace('1w8dvqpp824f')
.then((space) => space.getEnvironment('master'))
.then((environment) => environment.getEntry('<entry_id>'))
.then((entry) => {
entry.fields.title['en-US'] = 'New entry title'
return entry.update()
})
.then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
.catch(console.error)


    return (



        <div>
            
        </div>
    )
}

export default UpdateRecipe
