import { SampleServer } from "./frameworks-drivers/server";
import { SampleDatabase } from "./frameworks-drivers/database";

const main = async () => {
  const database = new SampleDatabase();
  const app = new SampleServer(database);
  app.start();
};

main();