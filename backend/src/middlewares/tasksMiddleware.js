const validateBody = (req, res, next) => {
    const {body} = req;
    if (body.title === undefined){
       return res.status(400).json({ message: 'The field "tile" is requeried'});
    }
    if (body.title === ''){
       return res.status(400).json({ message: 'Title cannot be empty'});
    }

    next();
};

module.exports = {
    validateBody,

};