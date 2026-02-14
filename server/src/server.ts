import { createExpressServer } from "routing-controllers";
import { UserController } from "./user/UserController";
import "reflect-metadata";
import { AppDataSource } from "./db/app-data-source";

const app = createExpressServer({
  controllers: [UserController],
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB connected");
  })
  .catch(console.error);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
