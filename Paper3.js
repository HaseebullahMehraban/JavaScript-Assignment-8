// Fetch Data
fetch('data.txt')
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('Error: ' + response.status);
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('An error occurred:', error);
    });