module.exports = (req,res,next)=>{
    if(req.session.user){
        next()
    }
    else{
        res.redirect("/users/login")
    }
    console.log("esto es en el login check LOGIN CHEEEECK:  "+ req.session.user.avatar);
}