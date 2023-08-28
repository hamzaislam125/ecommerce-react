import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { resolvers } from "./schema/resolvers.js";
import { typeDefs } from "./schema/typedefs.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();
const app = express();
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {});
mongoose.connection.on("open", () => {
  console.log("MongoDB connected successfully");
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

app.use(express.static('static'));
app.use(cors());
app.use(bodyParser.json());
 
app.use("/graphql", expressMiddleware(server));
app.use(authRoute);

app.listen(5000, () => console.log("Sabka bazaar server started."));
