import { app } from "@/app.js";
import { env } from "@/infrastructure/config/env.js";

const startServer = (): void => {
  app.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`);
  });
};

startServer();
