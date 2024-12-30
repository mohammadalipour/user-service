import { Controller, Get, Post } from '@nestjs/common';

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
