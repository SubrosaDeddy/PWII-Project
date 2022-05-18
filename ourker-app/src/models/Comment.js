import { GetCommentsByPost, InsertComment } from "../services/CommentService";

export default class Comment
{
    constructor (inputComent)
    {
        this._user = inputComment._user;
        this.comment = inputComment.comment;
        this._publication = inputComment._publication;
        this.like = inputComment.like;
    }

    insertCommentDB()
    {
        const res = await InsertComment(this);
        return res;
    }

    getIDUser()
    {
        return this._user;
    }

    setIDUser(inputID)
    {
        this._user = inputID;
    }

    getComments()
    {
        return this.comment;
    }

    setComments(inputComments)
    {
        this.comment = inputComments;
    }

    getPublication()
    {
        return this._publication;
    }

    setPublication(inputPublication)
    {
        this._publication = inputPublication;
    }

    getLike()
    {
        return this.like;
    }

    setLike(inputLike)
    {
        this._like = inputLike
    }

}