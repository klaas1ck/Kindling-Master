const user = require('../models/loginMongoose');
module.exports = (req, res, next) => {
    user.findById(req.session.userId, (error, user) => {
        if(error || !user) 
            return res.send('You are not logged into Kindling'); // Hvis man prøver at enter mainpage uden at være logget ind, bliver man ikke godkendt.
        next()
        
    })
}


