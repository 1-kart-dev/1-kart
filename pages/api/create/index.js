var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://new-user-0:ratman44@cluster0.horro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
{ useNewUrlParser: true, useUnifiedTopology: true });

export var userSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    first: {type: String, required: true},
    last: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

export var User = mongoose.model("User", userSchema);

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({"text": "create"})
    } else if (req.method === 'POST') {
        var exists = false;
        User.findOne({email: req.body.email}).exec((err, data) => {
            if (!err && data != undefined) {
                res.json({message: "Fail"});
            }
            if (!err) {
                User.findOneAndUpdate(
                    {email: req.body.email},
                    {id: req.body.id, first: req.body.first, last: req.body.last, email: req.body.email, password: req.body.password},
                    {new: true, upsert: true},
                    (error, savedUser) => {
                        if (!error) {
                            res.json({message: "Success"});
                        }
                    }
                )
            }
        })
    }
}