const express = require("express")
const { createARestaurant, getAllRestaurants, getASingleRestaurant, updateARestaurant, deleteASingleRestaurant } = require("../controllers/restaurantController")
const router = express.Router()


//get all restaurants
router.get("/",getAllRestaurants)
//get a single restaurant
router.get("/:id",getASingleRestaurant)

//create a new restaurant
router.post("/", createARestaurant)

//update a restaurant
router.patch("/:id",updateARestaurant)
//delete a restaurant
router.delete("/:id",deleteASingleRestaurant)







module.exports = router;
