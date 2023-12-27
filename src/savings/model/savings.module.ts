import { Module } from '@nestjs/common';
import { SavingsService } from '../savings.service';
import { SavingsController } from '../savings.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Saving, SavingSchema } from './savings.schema';
import { User, UserSchema } from 'src/users/model/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      // { name: Saving.name, schema: SavingSchema },
      { name: User.name, schema: UserSchema },
    ]),
    MongooseModule.forFeatureAsync([
      {
        name: Saving.name,
        useFactory: () => {
          const schema = SavingSchema;
          const pluginOption = { overrideMethods: 'all' };
          schema.plugin(require('mongoose-delete'), pluginOption );
          return schema;
        },
      },
    ]),
  ],
  controllers: [SavingsController],
  providers: [SavingsService],
})
export class SavingsModule {}
