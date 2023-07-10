const express = require("express");
const sonRoutes = require("./routes/son");
const dogsRoutes = require("./routes/dogs");

const app = express();
const PORT = 3000;

app.use("/son", sonRoutes);
app.use("/dogs", dogsRoutes);

app.listen(PORT, () => console.log(`Server Listen on PORT : ${PORT}`));
