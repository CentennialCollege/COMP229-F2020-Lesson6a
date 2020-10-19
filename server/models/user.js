let mongoose = require('mongoose');
let Schema = mongoose.Schema; // alias
let Model = mongoose.model; // alias

let UserSchema = new Schema({
   username: String,
   //password: string,
   email: String,
   displayName: String,
   created: 
   {
        type: Date,
        default: Date.now()
   },
   updated:
   {
       type: Date,
       default: Date.now()
   }
},
{
    collection: 'users'
});

module.exports.Model = Model('User', UserSchema);