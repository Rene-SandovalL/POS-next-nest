import { Injectable, ParseIntPipe, BadRequestException } from '@nestjs/common';

@Injectable()
export class IdValidatorPipe extends ParseIntPipe {
  constructor() {
    super({
      exceptionFactory: () => new BadRequestException('Invalid ID format'),
    });
  }
}
