// GET all posts, POST new post
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const blogs = await prisma.blog.findMany();
  return NextResponse.json(blogs);
}

export async function POST(req: Request) {
  const data = await req.json();
  const blog = await prisma.blog.create({
    data,
  });
  return NextResponse.json(blog);
}
