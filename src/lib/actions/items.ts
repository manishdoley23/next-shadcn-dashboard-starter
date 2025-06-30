'use server';

import { GetItemsResponse, Item } from '@/types/item';
import { auth } from '@clerk/nextjs/server';

export type GetItemsResult = {
  items: Item[];
  total: number;
  page: number;
  limit: number;
};

export async function getItems(
  searchParams: URLSearchParams
): Promise<GetItemsResult> {
  const authState = await auth();
  const { userId, getToken } = authState;

  if (!userId) {
    // This case should ideally be handled by middleware,
    // but as a safeguard, we throw an error.
    throw new Error('Authentication required. Please log in.');
  }

  const token = await getToken();
  if (!token) {
    // This case would be unusual if userId is present, but it's good practice to check.
    throw new Error('Could not retrieve authentication token.');
  }

  const url = new URL(
    `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/items`
  );
  searchParams.forEach((value, key) => {
    url.searchParams.append(key, value);
  });

  try {
    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${token}`,
        'x-clerk-user-id': userId
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message || `HTTP error! status: ${response.status}`
      );
    }

    const result: GetItemsResponse = await response.json();

    if (!result.success) {
      throw new Error(result.message || 'Failed to fetch items.');
    }
    return result.data;
  } catch (error) {
    // Log the actual error to the server console for debugging.
    console.error('Failed to fetch items:', error);

    // To avoid crashing the page, return a default empty state.
    // The UI can then display a user-friendly error message.
    return {
      items: [],
      total: 0,
      page: 1,
      limit: 10
    };
  }
}
