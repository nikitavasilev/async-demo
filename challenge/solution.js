// Exercice: transform the callback function to async/await

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({
          id: 1,
          name: 'Mosh Hamedani',
          isGold: true,
          email: 'email'
        });
      }
      reject(new Error("Didn't find the given ID."));
    }, 4000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
      reject(new Error("Didn't find any movies :("));
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ To: email, Content: movies });
      reject(new Error("Didn't find any movies :("));
    }, 4000);
  });
}

async function sendEmailToCustomer() {
  try {
    const customer = await getCustomer(1);
    if (customer.isGold) {
      const movies = await getTopMovies();
      console.log('Top movies: ', movies);
      const email = await sendEmail(customer.email, movies);
      console.log('Email sent...', email);
    }
  } catch (error) {
    console.log('Error:', error.message);
  }
}

sendEmailToCustomer();
