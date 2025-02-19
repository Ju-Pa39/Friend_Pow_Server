const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const handleError = require("./middlewares/error");
const notFound = require("./middlewares/notFound");

const authRouter = require("./routes/auth-route");
const userRouter = require("./routes/user-route");
const paymentRouter = require("./routes/payment-route");
const petRouter = require("./routes/pet-route");
const eventRouter = require("./routes/event-route");
const adminRouter = require("./routes/admin-route");
const exportRouter = require("./routes/export-route");
const languageMiddleware = require("./middlewares/languageMiddleware");


app.use(morgan("dev"));
app.use(express.json());
// app.use(cors());

app.use(express.static(process.env.STATIC_DIR));
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(bodyParser.json());
// สำหรับเปลี่ยนภาษาห้ามลบ
app.use(languageMiddleware);

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/event", eventRouter);
app.use("/payment", paymentRouter);
app.use("/pet", petRouter)
app.use("/admin", adminRouter)
app.use("/export", exportRouter)



app.use(handleError);
app.use('*', notFound);
app.listen(3000, () => console.log("Listening on port 3000"));
