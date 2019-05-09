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
      // resolve({ username, repositories: ['repo1', 'repo2', 'repo3'] });
      reject(new Error('Could not get the repos :('));
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

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

displayCommits();
