import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import indexRouter from "./routes/indexRoutes.js"
import { Server } from "socket.io";
import http from 'http';
import { saveNewMessage } from "./controllers/chatMessageController.js";

const app = express();
dotenv.config();
const server = http.createServer(app);
// const io = new Server(server);
const io = new Server(server,{
  cors: {
    origin: "http://localhost:5173"
  }
});
io.on('connection', (socket) => {
  console.log('A client connected');
  socket.on('join',(userId) => {
    socket.join(userId);
  })

  socket.on('message', (data) => {
    console.log('Received message:', data);
    // Broadcast the message to all connected clients
    io.emit('message', data);
  });

  socket.on('saveNewMessage',async (data) => {
    // console.log(data);
    const response =await saveNewMessage(data);
    // console.log(response);
    if(response === "FAILURE"){
      io.emit('failedToSaveNewMessage', response);
    } else
    {
      io.to(response?.sender).emit('chat message', response);
      io.to(response?.receiver).emit('chat message', response);
    }
  })

  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});


// Middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

app.use("/api", indexRouter);

// Connect to MongoDB
const uri ='mongodb+srv://bhaveshconnect38:IeKuFIjlvRBXoiww@MONGODB_URI=cluster0.odjspme.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri)

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
