import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type SavingDocument = Saving & Document;

@Schema({ timestamps: true })
export class Saving {
  @Prop({ required: true })
  typeProduct: string;

  @Prop({ required: true })
  numProduct: string;

  @Prop({ required: true })
  product: string;

  @Prop({ required: true })
  stateProduct: string;
  
  // @Prop({ required: true })
  // idPerson: mongoose.Types.ObjectId;
}

export const SavingSchema = SchemaFactory.createForClass(Saving);