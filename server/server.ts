import express, { Express, Request, Response} from "express";

const sequelize = require('./config');


const port = 8000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("hello from express!!")
});
app.get("/hi", (req: Request, res: Response) => {
    res.send("hello f express!!")
});



app.listen(port, () => {
    console.log(`now listening on port ${port}`)
})