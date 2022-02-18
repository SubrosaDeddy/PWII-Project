const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
    model_type:
    {
        type:String
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
            pictures:
            {
                type:String
            },
            date:
            {
                type:Date,
                required:true
            }
        }
    ]
});

const Device = mongoose.model("device", DeviceSchema);
module.exports = Device;