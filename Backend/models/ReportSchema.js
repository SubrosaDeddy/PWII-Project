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
                required:[true, 'Título es requisito'],
                minlength:[5, 'Título es muy corto'],
                maxlength:[100, 'Título es muy largo']
            },
            description:
            {
                type:String,
                maxlength:[500, 'Descripción es muy largo']
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
                required:[true, 'Fecha es requisito']
            }
        }
    ]
});

const Report = mongoose.model("report", ReportSchema);
module.exports = Report;