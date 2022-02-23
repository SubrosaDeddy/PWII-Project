const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
    model_type:
    {
        type:String
    },
    _category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"categories_rp"
    },
    issue_record:
    [
        {
            title:
            {
                type:String,
                required:true,
                minlength:5,
                maxlength:100
            },
            description:
            {
                type:String,
                maxlength:500
            },
            part:
            {
                type:String
            },
            _pictures:
            [
                {
                type:mongoose.Schema.Types.ObjectId,
                ref: "multimedia"
                }
            ],
            date:
            {
                type:Date,
                required:true
            }
        }
    ]
});

const Report = mongoose.model("report", ReportSchema);
module.exports = Report;