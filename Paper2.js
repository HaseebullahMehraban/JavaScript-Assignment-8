// Create a Promise for Success
function successPromise() {
    return new Promise((resolve, reject) => {
        resolve("Promise resolved successfully!");
    });
}

// Create a Promise for Error
function errorPromise() {
    return new Promise((resolve, reject) => {
        reject("Promise rejected with an error!");
    });
}

// Handle the Promises
successPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

errorPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });