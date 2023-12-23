import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";

export const MiddlewareAuth = (req: Request, res: Response, next: NextFunction) => {
    const { key } = req.query;

    if (key && key == process.env.KEY) {
        let token = jwt.sign({
            data: key
        }, process.env.KEYPRIVATE!)
        console.log(token);
        
        next();
    }
    else {
        // a token can also be passed through the query
        jwt.verify(key?.toString()!, process.env.KEYPRIVATE!,  (err, decoded)=>{
            if(err){
                res.status(404).send(`key invalid or not proporcioned`)
                throw err;
            }

            next();
        })
        
    }
}