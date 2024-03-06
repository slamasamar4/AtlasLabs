const express = require('express');

const app = express();

const dbConnect = require('./db/dbConnect')
const User = require('./db/userModel')

dbConnect.dbConnect()

const newUser = new User ({
    email : 'john@example.com',
    password : 'pass123'
})
/*newUser.save()
    .then(() => {
        console.log('user  inseted succesfully')
    })
    .catch((error) =>{
        console.error('error inserting user:' ,error)
    })
*/
User.findOne({email: 'john@example.com'})
    .then((User) =>{
        console.log('users found: ',User)
    })
    .catch((error) => {
        console.error('error finding users :',error)
    })

    User.updateOne({email: 'slamasamar430@gmail.com'}, {password: 'pass333'})
        .then(() => {
            console.log('user updated successfully')
        })
        .catch((error) => {
            console.error('errpr updating user: ',erorr)
        })

    User.updateMany({email: 'slamasamar430@gmail.com'}, {$set: {password: 'newpass'}})
        .then((result) => {
            console.log('documents updated:',result)
        })
        .catch((eror) =>{
            console.log('error updating user: ',error)
        })
    User.deleteOne({email:'slamasamar430@gmail.com'})
        .then(()=>{
            console.log('user deleteed successfuly')
        })
        .catch((erorr)=>{
            console.error('error deleting',error)
        })

    User.collection.createIndex({email: 5});


    User.find({email: 'slamasamar430@gmail.com' }).select({email: 5, _id: 0})
        .then((users)=>{
            console.log('users found , users')
        })
        .catch((error) =>{
            console.error("error finding users", error)
        })

module.exports = app;

