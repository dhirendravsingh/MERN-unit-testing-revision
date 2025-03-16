import express from "express";

export const app = express();
app.use(express.json());

app.post('/sum', (req,res)=>{
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;

    res.json({
        answer
    })
})

//there will be no app.listen here as the file containing the tests doesnt have a port to run it, it has to be exported to another file and a port a defined over there.

//since we only want to stimulate the request when running the test and not the actual server to run, hence we do not use this file