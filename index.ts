// server.js
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import menuItemRoutes from "./routes/menuItemRoutes";
import menuItemTypesRoutes from "./routes/MenuItemTypeRoutes";
import menuRoutes from "./routes/menuRoutes";
import reservationRoutes from "./routes/reservationRoutes";
import limiter from "./utils/rateLimiter";
import cors from "cors";


dotenv.config();

const app = express();
app.use(express.json());
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use("/auth/signin", limiter);
app.use("/auth/signup", limiter);
app.use("/auth", authRoutes);
app.use("/menu_items", menuItemRoutes);
app.use("/menu_item_types", menuItemTypesRoutes);
app.use("/menu", menuRoutes);
app.use("/reservations", reservationRoutes);


const PORT = process.env.PORT || 5005;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

export default app;
