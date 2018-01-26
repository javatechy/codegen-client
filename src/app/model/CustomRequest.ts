/**
 * Common Request for all HTTP calls
 */

export class CustomRequest {
  constructor(public userName?: string, public password?: string, public amount?: number,
              public transactionType?: string, public userId?: string,



              public properties?: Properties, public database?: Database, public logging ?: Logging , controllers ?: Controller[]) {
    this.properties = new Properties();
    this.database = new Database();
    this.logging = new Logging();
  }
}


export class Properties {
  public name  = 'demo';
  public groupId = 'demo';
  public artifactId = 'com.example';
  public description = 'This is a sample Project';
  public applicationClassName?: string;
  public language?: string;
  public developerName = 'Common Man';
  public developerEmailId = 'deepak@test.com';
  public springVersion?: string;
  public isConstantFile = false;
  public isGlobalExceptionEnabled = true;
  public isLombokEnabled = true;
  public isActuatorEnabled = true;
  public isDatabaseEnabled = true;
  public isLoggingEnabled = true;
}


export class Database {
  public isDatabaseEnabled = true;
  private databaseType = 'mysql';
  private userName = 'root';
  private password = '1';

}



export class Logging {
  private loggingFile = 'demo.log';
  private rotationSize = '200MB';


}

export class Entity {
  private name ?: string;
  private fields ?: Field[];
}


export class Field {
  private name ?: string;
  private type ?: string;
  public isUnique ?: boolean;
  public isNullable ?: boolean;
}

export class Controller {
  private name ?: string;
  private docsComment ?: string;
}
