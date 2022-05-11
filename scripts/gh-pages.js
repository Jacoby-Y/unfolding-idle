var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/username/unfolding-idle.git', // Update to point to your repository  
        user: {
            name: 'Jacoby-Y', // update to use your name
            email: 'cobyyliniemi@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)