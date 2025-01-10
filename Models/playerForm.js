const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    player: { type: String, required: true },
    position: { type: String, required: true },
    champion: { type: String, required: true },
})

module.exports = mongoose.model("Form", FormSchema);

//class FormModel {
    //constructor(name, age, player, position, champion) {
      //  this.name = name;
       // this.age = age;
       // this.player = player;
    //    this.position = position;
      //  this.champion = champion;
   // }
//}
//module.exports = FormModel;