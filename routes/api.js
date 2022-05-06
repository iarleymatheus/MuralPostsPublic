const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const posts = require("../model/posts")
const cors = require("cors")
const options = {
    origin:"http://localhost:1000"
}
router.use(cors(options))
router.get("/all", (req, res)=>{
    res.json(JSON.stringify(posts.gettAll()))
});
router.post("/new",bodyParser.json(), (req, res)=>{
 let title = req.body.title;
 let description = req.body.description;

 posts.newPost(title,description);
 
 res.send("Post adicionado!")

})

router.delete("/del",(req,res)=>{
   posts.deletePost();
   res.send("posts deletados!")
})

module.exports = router;