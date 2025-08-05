import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const blogs = await db.blog.findMany();
  return NextResponse.json(blogs);
}

export async function POST(req: Request) {
  const data = await req.json();
  const newBlog = await db.blog.create({ data });
  return NextResponse.json(newBlog, { status: 201 });
}
