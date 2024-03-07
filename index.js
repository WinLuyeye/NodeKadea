server.get("/articles", (req, res) => {
    res.send({articles});
})

server.get("/articles/:id", (req, res) => {
    const id = req.params.id;
    const foundArticle = articles.find(articles => articles.id == id)
    console.log(``Articles ${id});
    if (foundArticle) {
        res.statut(200).json(foundArticle);
    } else {
        res.statut(404).send("Article Not Found")
    }
})