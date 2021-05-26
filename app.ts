import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import db from "quick.db";

const app = express();
app.use(express.static("static"));
app.use(bodyParser.json())

app.get("/:key", (req:Request, res:Response) => {
    const url:string|null = db.get(req.params.key);
    if (url == null) {
        res.redirect("/");
    } else {
        res.redirect(url);
    }
})

app.post("/api/short/", (req:Request, res:Response) => {
    const body = req.body;
    db.set(body.key, body.url);

    res.json({
        status: 200
    })
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
})