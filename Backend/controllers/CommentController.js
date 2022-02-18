const Comment = require("../models/CommentSchema");

exports.comment_getall = async(req, res) =>{
    const data = await Comment.find();

    res.send(data);
}

exports.comment_create = async(req, res) => {
    const{body} = req;

    // Validación de la info
    // ...
    // ...
    // ...

    let newComment = new Comment(body);

    await new newComment.save()
    .then((newObject) => console.log("Success!"), newObject)
    .catch((err) => {
        console.error("oops!!", err);
        res.send(err.errors);
    });

    res.send(newComment);
}