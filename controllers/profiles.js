import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles.index', { 
      profiles,
      Title: "Hammy Owners"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function show(req, res){
  Profile.findById(req.params.id)
  .then((profile) => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      res.render("profiles/show", {
        title: `Hammy of ${profile.name}'s profile`,
        profile,
        self,
        isSelf,
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  })
}

function adoptCat(req, res){
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.hamsters.push(req.body)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}



export {
  index,
  show,
  adoptCat,
}