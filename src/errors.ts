import { randomUUID } from 'crypto';

export class APIError extends Error {
  public name: string;
  public id: string;
  public code: string;
  public http_code: number;
  public id_transaction = undefined;
  public data: any;

  constructor(options: { message: string; code: string; http_code?: number; data?: any }) {
    const { message, code, http_code, data } = options;
    super(message);
    this.id = randomUUID();
    this.name = this.constructor.name;
    this.code = code;
    this.http_code = http_code || 500;
    this.id_transaction = undefined;
    this.data = data;
  }
}

export class APIError500 extends APIError {
  constructor(message?: string, data?: any) {
    super({ message: message ?? 'internal server error', code: 'HTTP_500', http_code: 500, data });
  }
}

export class APIError400 extends APIError {
  constructor(message?: string, data?: any) {
    super({ message: message ?? 'not found', code: 'HTTP_400', http_code: 400, data });
  }
}
