// 1. Importa las utilidades de `astro:content`
import { defineCollection } from 'astro:content';
import PostsSchema from "../schemas/PostsSchema";

// 2. Define tu colección(es)
const postsCollection = defineCollection({
  type: 'content',
  schema: PostsSchema,
});

// 3. Exporta un único objeto `collections` para registrar tu(s) colección(es)
//    Esta clave debe coincidir con el nombre de tu directorio de colección en "src/content"
export const collections = {
  "posts": postsCollection,
}