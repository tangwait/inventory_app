const express = require("express");
const app = express();
const homeRouter = require("./routes/homeRouter");

app.set("view engine", "ejs");
app.use("/", homeRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});