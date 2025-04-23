import { getUsers, getPosts } from './api';
import * as utils from './utils';

async function main() {
  console.log('Starting application...');
  
  // Use the JavaScript utility functions
  const formattedTitle = utils.toTitleCase('welcome to our simple js/ts project');
  console.log(formattedTitle);
  
  const randomNum = utils.getRandomNumber(1, 100);
  console.log(`Random number: ${randomNum}`);
  
  // Use TypeScript functions to fetch data
  console.log('Fetching data from API...');
  
  try {
    const users = await getUsers();
    console.log(`Fetched ${users.length} users`);
    
    if (users.length > 0) {
      console.log(`First user: ${users[0].name} (${users[0].email})`);
    }
    
    const posts = await getPosts();
    console.log(`Fetched ${posts.length} posts`);
    
    if (posts.length > 0) {
      console.log(`First post title: ${posts[0].title}`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Run the main function
main().catch(console.error); 