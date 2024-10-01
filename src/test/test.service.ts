import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  getHello(): number[] {
    return [1, 2, 3, 3, 3, 4, 4, 4];
  }
}
