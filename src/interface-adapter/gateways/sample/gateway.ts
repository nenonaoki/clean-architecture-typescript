import { SampleDatabase } from "../../../frameworks-drivers/database";
import { DataAccess } from "../../../application-business-rule/usecases/sample/data-access-interface";

export class SampleGateway implements DataAccess {
  constructor(private readonly database: SampleDatabase){}

  save() {
    console.log('Data process comes here', this.database);
  }
}