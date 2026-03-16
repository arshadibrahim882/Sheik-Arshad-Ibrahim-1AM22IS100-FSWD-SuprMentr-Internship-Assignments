const express = require("express");

const studentRoutes = require("./routes/StudentRoutes");
const logger = require("./middleware/logger");

const app = express();
const PORT = 3000;

//Middleware.
app.use(express.json());
app.use(logger);

//Routes.
app.use("/", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});