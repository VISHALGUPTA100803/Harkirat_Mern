const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://vgpt007:4EV9OBMtqBIz030w@cluster0.hulezvc.mongodb.net/");

const userModel = mongoose.model('Users', { name: String, email: String, password: String });


const user = new userModel({ name: 'harkirat singh', email: 'harkirat@gmail.com' });
