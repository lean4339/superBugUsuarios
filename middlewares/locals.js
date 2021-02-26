module.exports = (req,res,next) => {
    if(req.session.user != undefined){
        res.locals.user = req.session.user;
    }
     //else{
       //res.locals.user = undefined
        //console.log(res.locals.user+ "   ESTO ES EN LOCALS ");
        //console.log(req.session.user);
    //} 
    next()
}