const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
var morgan = require('morgan')
const dotenv = require('dotenv');
dotenv.config();

const authRouter = require('./routes/api/auth.js');
const userRouter = require("./routes/api/users")




const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.json());
app.use('/', userRouter)
app.use('/auth', authRouter);
app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ msg: "Unauthorized Request" });
  }
});
mongoose
  .connect(
    `mongodb+srv://pearl24:Samhiba24@cluster0.qrlyk.mongodb.net/pearl?retryWrites=true&w=majority`,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('>> Connected to database <<'))
  .catch((err) => console.log(err.message));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
