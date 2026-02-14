import { createExpressServer } from "routing-controllers";
import { UserController } from "./user/UserController";

const app = createExpressServer({
  controllers: [UserController],
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
