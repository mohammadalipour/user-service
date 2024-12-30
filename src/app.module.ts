import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    UserModule,
    DatabaseModule,
  ],
  controllers: [UserController, HealthController],
})
export class AppModule {}
