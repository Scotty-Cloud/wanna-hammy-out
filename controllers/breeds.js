import { Breed } from '../models/breed.js'

function index(req, res) {
  Breed.find({})
  .then(breeds => {
    res.render('breeds/index', {
      title:"Hampsters!",
      breeds,
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

function show(req, res){
  Breed.findById(req.params.id)
  .populate("owner")
  .then(breed => {
    res.render('breeds/show', {
      breed,
      title: "hammy show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/breeds')
  })
}

function switchAggressive(req, res) {
  Breed.findById(req.params.id)
  .then(breed => {
    breed.aggressive = !breed.aggressive
    breed.save()
    .then(()=> {
      res.redirect(`/breeds/${breed._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/breeds')
  })
}
export {
  index,
  create,
  show,
  switchAggressive
}