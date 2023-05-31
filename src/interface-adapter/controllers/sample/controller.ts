import { SampleUsecase } from "../../../application-business-rule/usecases/sample/interactor";
import { IInput } from "../../../application-business-rule/usecases/sample/input-interface";
import { IOutput } from "../../../application-business-rule/usecases/sample/output-interface";
import { SampleGateway } from "../../gateways/sample/gateway";

class SampleInput implements IInput {
  private readonly _value: number;

  constructor(_value: number) {
    this._value = _value;
  }
  get value() {
    return this._value;
  }
}

export class SampleController {
  private gateway: SampleGateway;

  constructor(gateway: SampleGateway) {
    this.gateway = gateway;
  }

  async save(value: number) {
    const usecase = new SampleUsecase(this.gateway);
    const input: IInput = new SampleInput(value);
    const output: IOutput = await usecase.save(input);
    return output;
  }
};
