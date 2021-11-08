import { Router } from 'express'
import * as toysCtrl from '../controllers/toys.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// localhost:3000/toys - GET
router.get("/", toysCtrl.index )
// localhost:3000/toys/:id - GET
router.get("/:id", toysCtrl.show)
// localhost:3000/toys/:id/edit
router.get("/:id/edit", toysCtrl.edit)

// localhost:3000/toys - POST
router.post("/", isLoggedIn, toysCtrl.create)

// localhost:3000/toys/:id/flip-fun - PATCH
router.patch("/:id/flip-fun", isLoggedIn, toysCtrl.switchFun)

// localhost:3000/toys/:id - PUT
router.put("/:id", isLoggedIn, toysCtrl.update)

// localhost:3000/toys/:id - DELETE
router.delete("/:id", isLoggedIn, toysCtrl.delete)

export {
  router
}