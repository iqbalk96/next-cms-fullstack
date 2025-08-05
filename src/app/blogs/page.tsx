'use client';

import BlogList from '@/features/blogs/components/list';
import { useRouter } from 'next/navigation';

export default function PostsPage() {
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center justify-between px-4 pt-4">
        <h1>All Blogs</h1>
        <button onClick={() => router.push('/blogs/add')} className='bg-slate-500 text-white px-3 py-1 rounded'>Add Blog</button>
      </div>
      <BlogList />
    </div>
  );
}
