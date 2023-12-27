import { Injectable } from '@nestjs/common';
import { CreateSavingDto } from './dto/create-saving.dto';
import { UpdateSavingDto } from './dto/update-saving.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Saving, SavingDocument } from './model/savings.schema';
import { User, UserDocument } from 'src/users/model/user.schema';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

interface ModelExt<T> extends Model<T> {
  delete: Function;
}

@Injectable()
export class SavingsService {
  constructor(
    @InjectModel(Saving.name)
    private readonly savingModel: ModelExt<SavingDocument>,
    @InjectModel(User.name) private readonly userModel: ModelExt<UserDocument>,
  ) {}

  create(createSavingDto: CreateSavingDto) {
    try {
      return this.savingModel.create(createSavingDto);
    } catch (error) {
      return 'ERROR_SAVINGS';
    }
  }

  async findAll() {
    const list = this.savingModel.find({});
    return list;
  }

  async findOne(numProduct: string) {
    return this.savingModel.findOne({ numProduct});
  }

  async update(_id: string, updateSavingDto: UpdateSavingDto) {
    return this.savingModel.findOneAndUpdate({_id}, updateSavingDto, {
      upsert:true,
      new:true
    } )
  }

  async remove(id: string) {
    const _id = new Types.ObjectId(id);
    const response = this.savingModel.delete({ _id });
    return response;
  }
}
