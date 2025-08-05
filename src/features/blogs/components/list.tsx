'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Post = {
  id: number;
  title: string;
  content: string;
};

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setPosts(posts.filter(p => p.id !== id));
      }
    } catch (error) {
      alert('Failed to delete blog')      
    }
  };

  const handleEdit = (id: number) => {
    router.push(`/blogs/${id}`);
  };

  return (
    <div className="p-4">
      <table className="w-full table-auto border border-gray-300">
        <thead className="bg-gray-100 text-slate-900">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Content</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post: any) => (
            <tr key={post.id}>
              <td className="p-2 border text-center">{post.id}</td>
              <td className="p-2 border">{post.title}</td>
              <td className="p-2 border">{post.content}</td>
              <td className="p-2 border text-center">
                <button
                  onClick={() => handleEdit(post.id)}
                  className="bg-blue-500 text-white px-3 py-1 mr-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
