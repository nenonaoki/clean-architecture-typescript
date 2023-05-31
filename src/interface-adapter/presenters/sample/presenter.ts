import { IOutput } from "../../../application-business-rule/usecases/sample/output-interface";

export class SamplePresenter {
  private readonly value: number;

  constructor(output: IOutput) {
    this.value = output.value;
  }

  public toViewModel() {
    return {
      value: this.value,
    };
  }
};
