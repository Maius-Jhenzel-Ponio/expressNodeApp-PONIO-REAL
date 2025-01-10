const express = require("express");
const router = express.Router();
const Form = require("../Models/playerForm");

router.post("/", async (req, res)=> {
    const {name, age, player, position, champion} = req.body;

    try{
        const formEntry = new Form({name, age, player, position, champion});
        const savedEntry = await formEntry.save();

        console.log("Saved Data: ", savedEntry);
        res.status(201).json({ message: "Form Submitted Successfully", data: savedEntry});
    }
    catch{
        console.error("Error saving form data: ", error);
    }  
});
 module.exports = router;
