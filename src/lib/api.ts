export async function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
    next: { revalidate: 0 }, // skip cache
  });

  if (!res.ok) throw new Error('API error');
  return res.json();
}
