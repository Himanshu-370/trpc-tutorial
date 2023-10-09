import express from 'express';
import cors from 'cors';

import { initTRPC } from "@trpc/server"

const t = initTRPC.create()

const app = express();
app.use(cors({ origin: "http://localhost:5173" }))

console.log("Hii")

app.listen(3000)