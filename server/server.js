 
// //  const express = require("express");
// //  const mongoose = require("mongoose");
// //  const cookieParser = require("cookie-parser");
// //  const cors = require("cors");
// //  const authRouter = require("./routes/auth/auth-routes");

// //  //create a database connection -> u can also
// // //create a separate file for this and then import/use that file here

// // mongoose
// //   .connect("mongodb+srv://dristigupta2305:uHW9aGhVCHi4JEMr@digicom.hvobg.mongodb.net/")
// //   .then(() => console.log("MongoDB connected"))
// //   .catch((error) => console.log(error));

// //  const app = express();
// // const PORT = process.env.PORT || 5000;

// // app.use(
// //     cors({
// //         origin: "http://localhost:5173",
// //         methods: ["GET", "POST", "DELETE", "PUT"],
// //         allowedHeaders: [
// //             "Content-Type",
// //             "Authorization",
// //             "Cache-Control",
// //             "Expires",
// //             "Pragma",
// //         ],
// //         credentials: true,
// //     })
// // );

// // app.use(cookieParser());
// // app.use(express.json());
// // app.use("/api/auth", authRouter);

// // app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));

// // require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const authRouter = require("./routes/auth/auth-routes");

// // Create a database connection
// mongoose
//   .connect("mongodb+srv://dristigupta2305:uHW9aGhVCHi4JEMr@digicom.hvobg.mongodb.net/")
//   .then(() => console.log("MongoDB connected"))
//   .catch((error) => console.log(error));

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     allowedHeaders: [
//       "Content-Type",
//       "Authorization",
//       "Cache-Control",
//       "Expires",
//       "Pragma",
//     ],
//     credentials: true,
//   })
// );

// app.use(cookieParser());

// // Middleware
// app.use(express.json()); // Body parser middleware
// // app.use(cors()); // Cross-origin resource sharing

// // Corrected API route prefix
// app.use("/api/auth", authRouter);

// app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));


require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());  // ✅ Ensures backend can parse JSON
app.use(cookieParser());  // ✅ Parses cookies


app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
