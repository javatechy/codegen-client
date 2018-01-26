/**
 * Common Request for all HTTP calls
 */
export class CustomRequest {
  constructor(public userName?: string, public password?: string, public amount?: number,
              public transactionType?: string, public userId?: string,



              public properties?: Properties) {
  }
}


export class Properties {
  public name ?: string;
  public groupId ?: string;
  public artifactId ?: string;
  public description?: string;
  public applicationClassName?: string;
  public language?: string;
  public developerName?: string;
  public springVerison?: string;
  public isConstantFile?: boolean;
  public isGlobalExceptionEnabled?: boolean;
  public isLombokEnabled?: boolean;
  public isActuatorEnabled?: boolean;
}
