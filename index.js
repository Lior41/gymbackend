const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");


app.use(cors());
app.use(require("express").json());
const PORT = process.env.PORT || 8080;

const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://levlior41:12345@cluster0.tjryqma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB Connect Error", err));

const jwt = require("jsonwebtoken");




const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
const goalRoutes = require("./routes/goalRoutes")
app.use("/api/goals", goalRoutes);

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
