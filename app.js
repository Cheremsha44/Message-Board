const express = require("express");
const path = require("node:path");
const app = express();
const indexRouter = require("./routes/indexRoutes");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", indexRouter);

const PORT = process.env.PORT || 3100;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Server start in ${PORT} port`);
});
