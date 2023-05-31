import { runSample } from "../../../enterprise-business-rule/entities/sample";
import { IInput } from "./input-interface";
import { IOutput } from "./output-interface";
import { DataAccess } from "./data-access-interface";

class SampleOutput implements IOutput {
  private readonly _value: number;

  constructor(_value: number) {
    this._value = _value;
  }

  get value() {
    return this._value;
  }
}

export class SampleUsecase {
  private dataAccess: DataAccess;

  constructor(dataAccess: DataAccess) {
    this.dataAccess = dataAccess;
  }

  public async save(input: IInput): Promise<IOutput> {
    const computedValue = runSample(input.value);
    await this.dataAccess.save(computedValue);
    const output: IOutput = new SampleOutput(computedValue);
    return output;
  }
}
