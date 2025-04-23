import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

/**
 * Fetch users from the JSONPlaceholder API
 * @returns Promise containing an array of users
 */
export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

/**
 * Fetch posts from the JSONPlaceholder API
 * @returns Promise containing an array of posts
 */
export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}; 