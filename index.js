const express = require('express');
const app = express();
const fs = require('fs');
const router = express.Router();
const port = 8080;

// for api documentation 
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
const customCss = fs.readFileSync((process.cwd() + "/swagger/swagger.css"), 'utf8');
const apiController = require('./controllers/api');
const { param, validationResult } = require('express-validator');


/* This is a route handler. It is a function that is called when a request is made to the specified
route. */
router.get('/getUserById/:userid', param("userid").isInt() , function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ statusCode: 'error', message:"Bad request" });
    }
    apiController.getUserById(req.params.userid).then(data => res.json(data));
});

router.get('/getUsersAlbum/:userid', param("userid").isInt(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ statusCode: 'error', message: "Bad request" });
    }
    apiController.getUsersAlbum(req.params.userid).then((data) =>res.json(data));
});

router.get('/getAlbumwithImage/:userid', param("userid").isInt(), function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ statusCode: 'error', message: "Bad request" });
    }
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 10;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const offset = pageSize * (page-1);

    apiController.getAlbumwithImage(req.params.userid, pageSize, offset).then(data => res.json(data));
});

app.use('/api', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { customCss }));
app.listen(port, function () {
    console.log('Example app listening on port 8080!')
})