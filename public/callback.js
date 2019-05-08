console.log('Before');

// eslint-disable-next-line no-use-before-define
getUser(1, user => {
  // eslint-disable-next-line no-use-before-define
  getRepositories(user.gitHubUsername, repositories => {
    console.log('Repositories:', repositories);
    getCommits(repo, commits => {
      // CALLBACK HELL
    });
  });
});

console.log('After');

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

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log('Calling GitHub API...');
    callback(repo, ['commit']);
  }, 2000);
}

// Solution to callback hell:

console.log('Before');
getUser(1, getRepositories);
console.log('After');

function getRepositories(user) {
  getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
  getCommits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}
