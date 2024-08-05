console.log (" hellow world")
import express from "express";
import bodyParser from "body-parser";

const app = express()
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
   res.render("index.ejs" );
});

app.post("/submit", (req, res) => {
    const name = name.length ;
    res.render("index.ejs", { Letters:name });

})
app.listen(port, () =>{
console.log(`Server is running on port ${port}`)
}) 

