import express from "express";

const app = express();
const PORT = 4000;

const callbackFunction = (req, res) => {
  return res.end();
};
const handleLogin = (req, res) => {
  return res.send("Login here");
};

app.get("/", callbackFunction);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Server listening on port ${PORT}`);
app.listen(PORT, handleListening);
