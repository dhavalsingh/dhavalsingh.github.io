const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://dhavalsingh-egov.github.io/MyWebsite/',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
