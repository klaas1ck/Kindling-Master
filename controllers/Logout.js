module.exports = (req, res) => {
    req.session.destroy(() => { //Log ud til frontpage
        res.redirect('/');
    })
};