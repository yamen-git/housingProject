const Listing = require('../../models/listing.js')

module.exports = {
  listings: (data) => {
    if (data.getListingInput && data.getListingInput._id) {
      return Listing.findById(data.getListingInput)
        .then((result) => {
          return [{ ...result._doc }]
        })
        .catch((err) => {
          console.log(err)
          throw err
        })
    }

    return Listing.find()
      .then((result) => {
        return result.map((item) => {
          return { ...item._doc }
        })
      })
      .catch((err) => {
        console.log(err)
        throw err
      })
  },
  createListing: (args) => {
    const listing = new Listing({
      name: args.listingInput.name,
      area: args.listingInput.area,
      price: args.listingInput.price,
      imageLink: args.listingInput.imageLink,
      baths: args.listingInput.baths,
      beds: args.listingInput.beds,
      builtInYear: args.listingInput.builtInYear,
      parking: args.listingInput.parking,
      view: args.listingInput.view,
      description: args.listingInput.description,
    })

    return listing
      .save()
      .then((result) => {
        return { ...result._doc }
      })
      .catch((err) => {
        console.log('error creating', err)
        throw err
      })
  },
  editListing: (args) => {
    const editListingData = {
      name: args.editListingInput.name,
      area: args.editListingInput.area,
      price: args.editListingInput.price,
      imageLink: args.editListingInput.imageLink,
      baths: args.editListingInput.baths,
      beds: args.editListingInput.beds,
      builtInYear: args.editListingInput.builtInYear,
      parking: args.editListingInput.parking,
      view: args.editListingInput.view,
      description: args.editListingInput.description,
    }

    return Listing.findByIdAndUpdate(
      { _id: args.editListingInput._id },
      editListingData,
      { new: true }
    )
      .then((result) => {
        return { ...result._doc }
      })
      .catch((err) => {
        console.log(err)
        return err
      })
  },
}
