const { buildSchema } = require('graphql')

module.exports = buildSchema(`
type Listing {
  _id : ID!
  name: String!
  area: Int!
  price: Int!
  imageLink: String!
  baths:Int!
  beds: Int!
  builtInYear: Int!
  parking: String!
  view : String!
  description:String
}

input ListingInput { 
  name: String!
  area: Int!
  price: Int!
  imageLink: String!
  baths:Int!
  beds: Int!
  builtInYear: Int!
  parking: String!
  view : String!
  description:String
}

input EditListingInput {
  _id : ID!
  name: String!
  area: Int!
  price: Int!
  imageLink: String!
  baths:Int!
  beds: Int!
  builtInYear: Int!
  parking: String!
  view : String!
  description:String
}

input GetListingInput{
  _id:String
}
type RootQuery {
    listings(getListingInput: GetListingInput): [Listing!]!
}

type RootMutation {
    createListing(listingInput: ListingInput) : Listing
    editListing(editListingInput: EditListingInput) : Listing
}
schema {
  query: RootQuery
  mutation: RootMutation
}
`)
