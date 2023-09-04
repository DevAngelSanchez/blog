import { z } from 'astro:content';

const PostsSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string().optional(),
  author: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string()
  }).optional(),
  tags: z.array(z.string())
});

export default PostsSchema;