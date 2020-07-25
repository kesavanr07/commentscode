const Comments      = require("../model/comments");

class CommentData {
    saveComment = async (req, callback) => {

        const req_body  = req.body || {};

        if(Object.keys(req_body).length === 0)
            return callback("Empty request data");

        const {comment_value, _id, type} = req_body;
        
        if(!comment_value)
            return callback("Empty to email id");

        try {
            // const isExist = await Comments.findOne({_id : _id});
            // console.log('isExist :>> ', isExist);
            // await Tickets.findOneAndUpdate({ticket_id: ticket_id},{
            //     $set:{
            //         cancelled_date : moment().format("DD/MM/YYYY"),
            //         status : 'cancelled'
            //     }
            // });
            if(type === 'add') {
                const comment_count = await Comments.find({}).count();
                const new_comment = Comments({
                    comment_id : comment_count + 1,
                    comment_text : comment_value,
                });
                
                await new_comment.save();

                callback(null, "Comment added successfully");
            } else {
                await Comments.findOneAndUpdate({_id: _id},{
                    $set: {
                        comment_text : comment_value
                    }
                });
                callback(null, "Comment updated successfully");
            }
        } catch (error) {
            callback(error);
        }
    }

    getComments = async (req, callback) => {
        try {
            const comment_data = await Comments.find({});
            callback(null, comment_data);
        } catch (error) {
            callback(error);
        }
    }

}
module.exports = new CommentData