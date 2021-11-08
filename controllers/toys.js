import { Toy } from '../models/toy.js'

function index(req, res) {
  Toy.find({})
  .then(breeds => {
    res.render('toys/index', {
      title:"Hampsters!",
      breeds,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/toys")
  })
}

function create(req,res) {
  req.body.owner = req.user.profile._id
  req.body.aggressive = !!req.body.aggressive
  Toy.create(req.body)
  .then(breed => {
    res.redirect('/toys')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/toys')
  })
}

function show(req, res){
  Toy.findById(req.params.id)
  .populate("owner")
  .then(breed => {
    res.render('toys/show', {
      breed,
      title: "toy show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/toys')
  })
}

function switchAggressive(req, res) {
  Toy.findById(req.params.id)
  .then(breed => {
    breed.aggressive = !breed.aggressive
    breed.save()
    .then(()=> {
      res.redirect(`/toys/${breed._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/toys')
  })
}

function edit(req, res) {
  Toy.findById(req.params.id)
  .then(breed => {
    res.render('toys/edit', {
      breed,
      title: "edit"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/toys')
  })
}

function update(req, res) {
  Toy.findById(req.params.id)
  .then(breed => {
    if(breed.owner,equals(eq.user.profile_id)) {
      req.body.aggressive = !!req.body.agressive
      breed.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/toys/${breed._id}`)
      })
    } else {
      throw new Error ("Do You Know Anything About Hammy?")
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/toys`)
  })
}

function deleteBreed(req, res) {
  Toy.findById(req.params.id)
  .then(breed => {
    if(breed.owner.equals(req.user.profile._id)){
      breed.delete()
      .then(() => {
        res.redirect('/toys')
      })
    } else {
      throw new ERROR ('CANT BURY SOMEONE ELSES HAMMY')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/toys')
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