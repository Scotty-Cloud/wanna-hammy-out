import { Breed } from '../models/breed.js'

function index(req, res) {
  Breed.find({})
  .then(breeds => {
    res.render('breeds/index', {
      breeds,
      title:"Hampsters!"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/breeds")
  })
}

export {
  index
}