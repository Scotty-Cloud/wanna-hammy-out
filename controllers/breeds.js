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

function create(req,res) {
  req.body.owner = req.user.profile_id
  req.body.aggressive = !!req.body.aggressive
  Breed.create(req.body)
  .then(breed => {
    res.redirect('/breeds')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/breeds')
  })
}

export {
  index,
  create
}