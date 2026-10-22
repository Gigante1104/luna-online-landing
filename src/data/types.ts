export type Category = "Cobijas" | "Mantas" | "Cojines" | "Ropa de cama";

export type Product = {
  id: string;
  nombre: string;
  categoria: Category;
  precio: number; // en COP
  descripcion: string;
  imagenes: string[]; // 2 a 4 rutas
};
