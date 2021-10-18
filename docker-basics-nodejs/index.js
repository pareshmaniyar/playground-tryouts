const app = require('express')();
app.get('/', function (_req, res) {
    res.send("Learn Docker now and later, kubernetes on the way!");
})
const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Node instance has started on port " + port));

