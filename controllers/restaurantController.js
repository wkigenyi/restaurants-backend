const Restaurant = require("../models/restaurantModel")
const mongoose = require("mongoose")


//create a restaurant
const createARestaurant = async(req,res) =>{
    const {name,location,cuisine,image} = req.body
    try{
        const restaurant = await Restaurant.create({name,location,image,cuisine})
        res.status(200).json(restaurant)
    }catch(e){
        res.status(400).json({message:e.message})
    }
}

const getAllRestaurants = async(req,res) =>{
    const restaurants = await Restaurant.find({}).sort({createdAt: -1})
    res.status(200).json(restaurants)
}

const getASingleRestaurant = async(req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No Such Restaurant"})
    }
    const restaurant = await Restaurant.findById(id);
    if(!restaurant){
        return res.status(404).json({error:"No Such Restaurant"})
    }
    res.status(200).json(restaurant)
}

const deleteASingleRestaurant = async(req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No Such Restaurant"})
    }
    const restaurant = await Restaurant.findOneAndDelete({_id:id});
    if(!restaurant){
        return res.status(404).json({error:"No Such Restaurant"})
    }
    res.status(200).json(restaurant)
}

const updateARestaurant = async(req,res) =>{
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No Such Restaurant"})
    }
    const restaurant = await Restaurant.findByIdAndUpdate({_id:id},{...req.body});
    if(!restaurant){
        return res.status(404).json({error:"No Such Restaurant"})
    }
    res.status(200).json({...restaurant._doc,...req.body})
}

module.exports = {
    getASingleRestaurant,
    getAllRestaurants,
    createARestaurant,
    deleteASingleRestaurant,
    updateARestaurant,
}