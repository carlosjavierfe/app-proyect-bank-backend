import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({  })
  email: string;

  @Prop({  })
  psw: string;

  @Prop({  })
  description: string;

  @Prop({ required: true })
  contactInfo: string;

  @Prop({ required: true })
  personName: string;

  @Prop({ required: true })
  typeIdent: string;

  @Prop({ required: true })
  numIdent: string;

  @Prop({ required: true })
  adviser: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
