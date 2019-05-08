const p = new Promise((resolve, reject) => {
  // Kick off some async work
  // ...
  setTimeout(() => {
    resolve(1); // pending => resolved, fullfiled
    reject(new Error('message')); // pending => rejected
  }, 2000);
});

p.then(result => console.log('Result', result)).catch(err =>
  console.log('Error', err.message)
);

// Previous code:
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id, gitHubUsername: 'mosh' });
      reject(new Error('Somethin went wrong :('));
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve({ username, repositories: ['repo1', 'repo2', 'repo3'] });
      reject(new Error('Somethin went wrong :('));
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
      reject(new Error('Somethin went wrong :('));
    }, 2000);
  });
}

console.log('Before');

getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log('Commits', commits))
  .catch(err => console.log('Error', err.message));

console.log('After');
