import { Breed } from '../models/toy.js'

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
  req.body.owner = req.user.profile._id
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

function edit(req, res) {
  Breed.findById(req.params.id)
  .then(breed => {
    res.render('breeds/edit', {
      breed,
      title: "edit"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/breeds')
  })
}

function update(req, res) {
  Breed.findById(req.params.id)
  .then(breed => {
    if(breed.owner,equals(eq.user.profile_id)) {
      req.body.aggressive = !!req.body.agressive
      breed.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/breeds/${breed._id}`)
      })
    } else {
      throw new Error ("Do You Know Anything About Hammy?")
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/breeds`)
  })
}

function deleteBreed(req, res) {
  Taco.findById(req.params.id)
  .then(breed => {
    if(breed.owner.equals(req.user.profile._id)){
      breed.delete()
      .then(() => {
        res.redirect('/breeds')
      })
    } else {
      throw new ERROR ('CANT BURY SOMEONE ELSES HAMMY')
    }
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
  switchAggressive,
  edit,
  update,
  deleteBreed as delete
}