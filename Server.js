import express from 'express';
import Path from "./Routes/Route.js";
import Db from "./Model/Db.js";


const app = express();
const PORT = 10000 ;

app.use(express.json());
app.use("/api", Path);

Db();




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});