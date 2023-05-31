import { SampleDatabase } from "../database";
import { SampleController } from "../../interface-adapter/controllers/sample/controller";
import { SamplePresenter } from "../../interface-adapter/presenters/sample/presenter";
import { SampleGateway } from "../../interface-adapter/gateways/sample/gateway";

export class SampleServer {
  constructor(private readonly database: SampleDatabase) {
    console.log('Initialize server application');
  }

  private async sample(x: number) {
    const gateway = new SampleGateway(this.database);
    const controller = new SampleController(gateway);
    const output = await controller.save(x);
    const presenter = new SamplePresenter(output);
    const viewModel = presenter.toViewModel();
    return viewModel;
  }

  async start() {
    const value = 1;
    console.log("Start server application", await this.sample(value));
  };
};
