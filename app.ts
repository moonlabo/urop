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
    const key:string = req.body.key;
    const url:string = req.body.url;

    if (db.get(key) == null) {
        db.set(key, url);
        res.json({status: 200})
    } else {
        res.json({status: 403})
    }
})

app.listen(3000, () => {
    console.log("http://localhost:3000");
})