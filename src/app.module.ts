import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { SavingsModule } from './savings/model/savings.module';
=======
import { SavingsModule } from './savings/savings.module';
>>>>>>> d40c7c366858bdf9abfea05f4e77985c8f240ba8
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
<<<<<<< HEAD
import { UsersModule } from './users/users.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
=======
>>>>>>> d40c7c366858bdf9abfea05f4e77985c8f240ba8

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
<<<<<<< HEAD
    MongooseModule.forRoot(process.env.DB_URI),
    SavingsModule,
    AuthModule,
    UsersModule,
=======
    SavingsModule,
    AuthModule,
>>>>>>> d40c7c366858bdf9abfea05f4e77985c8f240ba8
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
