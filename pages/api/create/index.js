var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://new-user-0:ratman44@cluster0.horro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
{ useNewUrlParser: true, useUnifiedTopology: true });

let userSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: String,
    name: String,
});

let User = mongoose.model("User", userSchema);

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({"text": "create"})
    } else if (req.method === 'POST') {
        var exists = false;
        User.findOne({username: req.body.username}).exec((err, data) => {
            if (!err && data != undefined) {
                exists = true;
                return;
            }
            if (!err) {
                User.findOneAndUpdate(
                    {username: req.body.username},
                    {id: req.body.id, username: req.body.username, password: req.body.password, email: req.body.email, name: req.body.name},
                    {new: true, upsert: true},
                    (error, savedUser) => {
                        if (!error) {
                            res.redirect('/Kart');
                        }
                    }
                )
            }
        })
        if (exists) {
            return res.json({error: "User already exists."});
        }
    }
}