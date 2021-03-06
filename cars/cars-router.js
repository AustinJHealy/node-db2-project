const express = require("express")
const db = require("../data/config")

const router = express.Router()

router.get("/cars", async (req, res, next) => {
    try{
        res.json(await db("cars"))
    } catch(err) {
        next(err)
    }
})

router.post("/cars", async (req,res,next) => {
    try {
		const [VIN] = await db("cars").insert(req.body)
		const newCar = await db("cars").where({ VIN }).first()

		res.status(201).json(newCar)
    } catch(err) {
        next(err)
    }
})
module.exports = router
