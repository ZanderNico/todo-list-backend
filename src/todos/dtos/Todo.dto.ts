import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
    @IsNotEmpty()
    @IsString()
    title: string;
  
    @IsNotEmpty()
    @IsString()
    description: string;
  
    @IsOptional()
    @IsBoolean()
    isCompleted?: boolean;
  }
  
  export class UpdateTodoDto {
    @IsString()
    title?: string;
  
    @IsString()
    description?: string;
  
    @IsBoolean()
    isCompleted?: boolean;
  }
