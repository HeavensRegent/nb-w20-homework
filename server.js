const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const logger = require("morgan");
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(logger("dev"));
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
app.listen(PORT, ()=> {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
})
