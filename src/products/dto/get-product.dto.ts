import { IsNumberString, IsOptional } from 'class-validator';

export class GetProductQueryDto {
  @IsOptional()
  @IsNumberString(
    { no_symbols: true },
    { message: 'El id de la categoría debe ser un número' },
  )
  category_id?: number;
}
