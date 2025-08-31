"use client";

export async function fetchFromApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3001/api';
  const url = `${API_BASE}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
