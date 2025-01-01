import { Controller, Post } from '@nestjs/common';
import { Public } from '../auth/decorator/public.decorator';

@Public()
@Controller('health-check')
export class HealthController {
  @Post()
  checkHealth() {
    return {
      success: true,
      timestamp: new Date().toISOString(),
    };
  }
}
