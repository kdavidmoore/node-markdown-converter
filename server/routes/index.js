var express = require('express');
var router = express.Router();
var markdown = require('markdown').markdown;
// var mongo = require('mongodb');
// var mongoClient = mongo.MongoClient;
// var mongoUrl = 'mongodb://localhost:27017/markdown';
// var db;

// // create a connection with mongo
// mongoClient.connect(mongoUrl, function(error, database){
// 	db = database;
// });

//include multer stuff
// var multer = require('multer');
// var fs = require('fs');
// var upload = multer({dest: 'uploads/'});
// var type = upload.single('uploadedFile');

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/convert', function(req, res, next) {
	var myHTML = markdown.toHTML(req.body.markdown);
	res.json({ html: myHTML });
});

router.get('/upload', function(req, res, next) {
	res.render('upload-file', { title: 'Upload a markdown file'});
});

// router.post('/addfile', type, function(req, res, next) {
// 	fs.readFile(req.file.path, function(error, data) {
// 		if (error) {
// 			throw error;
// 		} else {
// 			res.json({ html: 'blah' });
// 		}
// 	});
// });

module.exports = router;
