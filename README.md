## HPL

HPL app allows us to create a property listing, display a property listing and edit a property listing.

## Technologies Used

1. Node.Js
2. Express
3. React Frontend
4. GraphQL for the API's
5. MongoDB
6. TypeScript

## Frontend

Steps:

1. Go to folder Frontend
2. Run npm install(Make sure Node.Js/npm is installed)
3. Run npm start(to run the frontend)
4. Frontend will run on http://localhost:3000.
5. To run test, write npm run test in command prompt.

## Backend

Steps:

1. Go to folder Backend
2. Run npm install
3. Run npm start
4. Backend will run on http://localhost:4000

## MongoDB

MongoDB is already setup and credentials are available in nodemon.json file.

Sample collection :

```
{
        "name": "Pershore Street",
        "_id": "614bbc5d61422a507a8fd163",
        "area": 1000,
        "price": 35,
        "imageLink": "Test",
        "baths": 1,
        "beds": 1,
        "builtInYear": 1902,
        "parking": "Yes",
        "view": "Yes",
        "description": "Beautiful and Amazing Property"
}

```

## GraphQL to create and edit property

Open http://localhost:4000/graphql

## To create a property:

```
mutation {
createListing(listingInput: {name: "Property 3",description:"Beautiful and Amazing Property" area: 1000, price: 35, imageLink: "Test", baths: 1, beds: 1, builtInYear: 1902, parking: "Yes", view: "Yes"}) {
name
area
\_id
}
}
```

## To list all the properties on GraphQL interface:

```
query{
listings(getListingInput:{\_id:""}){
name
\_id
area
price
imageLink
baths
beds
builtInYear
parking
view
description
}
}
```

-- Pass a specific property Id to display the content of particular listing

## To edit a property:

```
mutation {
editListing(editListingInput:{\_id: "614ba1b70e9731632e48732f", name: "Property 5", area: 1200, price: 35, imageLink: "Test", baths: 1, beds: 1, builtInYear: 1902, parking: "Yes", view: "Yes",description:"Test"}){
name
area
description
}
}
```

## Future Improvements:

1. Login flow
2. Create and Edit interfaces
3. Agent details
4. Uploading images(Dynamic Images) from UI
5. More fields for properties.

## Time Taken:

6h
