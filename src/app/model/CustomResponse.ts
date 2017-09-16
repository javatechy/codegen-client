export class CustomResponse {

  constructor(public user?: User, public users?: User[], public balance?: Balance, public status?: string, public error?: Error) {

  }
}

export interface User {
  role?: string;
  balance?: Number;
  userName?: string;
  password?: string;
  userId?: string;
}

export interface Transaction {
  transactionId?: string;
  oldBalance?: Number;
  newBalance?: string;
  walletBalance?: string;
  userId?: string;
}
export interface Balance {
  balance?: Number;
}

export interface Error {
  status?: string;
  message?: string;
}

