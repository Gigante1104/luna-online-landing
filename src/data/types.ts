export type Category =
  | "Cobijas"
  | "Kits"
  | "Cojines"
  | "Toallas"
  | "Ropa"
  | "Accesorios";

export type Product = {
  id: string;
  nombre: string;
  categoria: Category;
  descripcion: string;
  precio?: number; // en COP; opcional
  materiales?: string[];
  grosor?: string[]; // "Una capa", "Doble capa"
  tamanos?: string[]; // medidas o tallas
  incluye?: string[]; // para kits
  personalizacion: string[]; // Bordado, Estampado...
  imagenes: string[]; // 2 a 4 rutas
};
