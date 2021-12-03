import { publish } from 'gh-pages';

publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/tuckergordon/haunted-harvest.git', // Update to point to your repository  
    user: {
      name: 'Tucker', // update to use your name
      email: 'tucker.gordon18@gmail.com' // Update to use your email
    }
  },
  () => {
    console.log('Deploy Complete!')
  }
)