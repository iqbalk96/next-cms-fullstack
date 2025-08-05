import { prisma } from '@/lib/prisma';

export const getAllPosts = () => prisma.blog.findMany();

export const getPostById = (id: number) =>
  prisma.blog.findUnique({ where: { id } });

export const createPost = (data: any) =>
  prisma.blog.create({ data });

export const updatePost = (id: number, data: any) =>
  prisma.blog.update({ where: { id }, data });

export const deletePost = (id: number) =>
  prisma.blog.delete({ where: { id } });
