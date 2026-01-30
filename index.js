const myPromise = new Promise((resolve, reject) => {
    let marks = 44;
    if (marks >= 33) {
        resolve("Student has passed the exam.");
    } else {
        reject("Student has failed the exam.");
    }   
});

myPromise
    .then(() => {
        console.log("Success: " + "Student has passed the exam.");
    })
    .catch((error) => {
        console.log("Error: " + error);
    });