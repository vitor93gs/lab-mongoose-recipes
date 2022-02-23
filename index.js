const mongoose = require('mongoose');
const express = require("express");
const app = express()
// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');
// const { insertMany } = require('./models/Recipe.model');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
   
    return Recipe.deleteMany()

  })
    // const createdContent = Recipe.create(
    //   {
    //   "title": "Asian Glazed Chicken Thighs",
    //   "level": "Amateur Chef",
    //   "ingredients": [
    //     "1/2 cup rice vinegar",
    //     "5 tablespoons honey",
    //     "1/3 cup soy sauce (such as Silver Swan®)",
    //     "1/4 cup Asian (toasted) sesame oil",
    //     "3 tablespoons Asian chili garlic sauce",
    //     "3 tablespoons minced garlic",
    //     "salt to taste",
    //     "8 skinless, boneless chicken thighs"
    //   ],
    //   "cuisine": "Asian",
    //   "dishType": "main_course",
    //   "image": "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
    //   "duration": 40,
    //   "creator": "Chef LePapu"
    // }
    // );
  .then(() => {
    Recipe.insertMany(data).then(() => {
      Recipe.findOneAndUpdate({title:"Rigatoni alla Genovese"},{duration: "100"}, {new:true}).then(() => {
        console.log("ok")
      }).then(() => {
        Recipe.deleteOne({title:"Carrot Cake"}).then(() => {
          console.log("2ok")
        }).then(() => {
          mongoose.connection.close()
        })
      });
    })
  })


    
