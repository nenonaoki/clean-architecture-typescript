export class SampleDatabase {
  private readonly host: string;
  private readonly port: number;
  private readonly username: string;
  private readonly password: string;
  private readonly database: string;

  constructor() {
    console.log('Initialize database client');
    this.host = '127.0.0.1';
    this.port = 5432;
    this.username = 'root';
    this.password = '';
    this.database = 'sample'; 
  }
};
