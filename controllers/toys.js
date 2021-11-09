import { Toy } from '../models/toy.js'

function index(req, res) {
  Toy.find({})
  .then(toys => {
    console.log(toys)
    res.render('toys/index', {
      title:"Hamster Toys!",
      toys,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/toys")
  })
}



function create(req,res) {
  req.body.owner = req.user.profile._id
  req.body.fun = !!req.body.fun
  Toy.create(req.body)
  .then(toy => {
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
  .then(toy => {
    res.render('toys/show', {
      toy,
      title: "Show Toy"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/toys')
  })
}

function switchFun(req, res) {
  Toy.findById(req.params.id)
  .then(toy => {
    toy.fun = !toy.fun
    toy.save()
    .then(()=> {
      res.redirect(`/toys/${toy._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/toys')
  })
}

function edit(req, res) {
  Toy.findById(req.params.id)
  .then(toy => {
    res.render('toys/edit', {
      title: "edit",
      toy,    
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/toys')
  })
}

function update(req, res) {
  Toy.findById(req.params.id)
  .then(toy => {
    if(toy.owner.equals(req.user.profile._id)) {
      req.body.fun = !!req.body.fun
      toy.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/toys/${toy._id}`)
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

function deleteToy(req, res) {
  Toy.findById(req.params.id)
  .then(toy => {
    if(toy.owner.equals(req.user.profile._id)) {
      toy.delete()
      .then(() => {
        res.redirect('/toys')
      })
    } else {
      throw new ERROR ('DONT BULLY OTHER PEOPLES HAMMY!')
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
  switchFun,
  edit,
  update,
  deleteToy as delete
}