console.log('Before');
// eslint-disable-next-line no-use-before-define
getUser(1, user => {
  // eslint-disable-next-line no-use-before-define
  getRepositories(user.gitHubUsername, repositories => {
    console.log('Repositories:', repositories);
  });
});
console.log('After');

// Callbacks
// Promises
// Async/await

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    callback({ id, gitHubUsername: 'mosh' });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log('Calling GitHub API...');
    callback({ username, repositories: ['repo1', 'repo2', 'repo3'] });
  }, 2000);
}
