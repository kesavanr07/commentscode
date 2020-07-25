const express = require('express');
const router  = express.Router();

const common = require('../lib/utils/common');
const comments = require('../lib/controller/comments');

router.post('/save', function(req, res) {
    comments.saveComment(req, (err, data) => {
        common.handleResponse(err, data, res);
    });
});

// router.post('/delete', function(req, res) {
//     comments.deleteUsers(req, (err, data) => {
//         common.handleResponse(err, data, res);
//     });
// });

router.post('/get', function(req, res) {
    comments.getComments(req, (err, data) => {
      common.handleResponse(err, data, res);
  });
});

module.exports = router;
