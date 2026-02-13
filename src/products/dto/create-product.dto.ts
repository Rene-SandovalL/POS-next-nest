import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'El nombre del producto es obligatorio' })
  @IsString({ message: 'El nombre del producto debe ser una cadena de texto' })
  name!: string;

  @IsNotEmpty({ message: 'El precio del producto es obligatorio' })
  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message:
        'El precio del producto debe ser un número con máximo 2 decimales',
    },
  )
  price!: number;

  @IsNotEmpty({ message: 'El stock del producto es obligatorio' })
  @IsNumber(
    { maxDecimalPlaces: 0 },
    {
      message: 'El stock del producto debe ser un número entero',
    },
  )
  stock!: number;

  @IsNotEmpty({ message: 'La categoría del producto es obligatoria' })
  @IsInt({ message: 'La categoría del producto debe ser un número entero' })
  categoryId!: number;
}
