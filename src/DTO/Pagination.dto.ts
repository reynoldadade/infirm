/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsOptional, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';

export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  skip?: number = 0;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  take?: number = 10;

  @IsOptional()
  cursor?: Prisma.UserWhereUniqueInput;

  @IsOptional()
  where?: Prisma.UserWhereInput;

  @IsOptional()
  orderBy?: Prisma.UserOrderByWithRelationInput;
}
