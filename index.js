import express from "express";
import bodyParser from "body-parser";

const app = express()
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/all_posts', (req, res) => {
    res.json(posts);
})

app.get("/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * posts.length);
    res.json(posts[randomIndex]);
  })

app.get("/posts/:id", (req, res) => {
const id = parseInt(req.params.id);
const foundPost = posts.find((post) => post.id === id);

if (foundPost) {
    res.status(200).json(foundPost);  // If the joke is found, return it
} else {
    res.status(404).json({ message: "Post not found! :(" });  // If not found, return a 404
}
});


  
  


app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`    
))

const posts = [
    {
        id: 1,
        title: "First Post",
        content: "This if the first post",
    },
    {
        id: 2,
        title: "Second Post",
        content: "This is the second post",
    }
]