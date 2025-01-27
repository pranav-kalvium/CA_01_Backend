const express = require('express');
const app = express();










app.get('/signup', (req, res) => {
    const { username, password, dob, email } = req.query;

 
    if (username) {
        for (let i = 0; i < username.length; i++) {
            if (!((username[i] >= 'a' && username[i] <= 'z') || (username[i] >= 'A' && username[i] <= 'Z'))) {
                return res.send("Username cannot be empty.");
            }
        }
    }

    if (email) {
        if (!email.includes('@') || !email.includes('.') || email.indexOf('@') > email.lastIndexOf('.')) {
            return res.send("Email cannot be empty.");
        }
    }

 
    if (password) {
        if (password.length < 8 || password.length > 16) {
            return res.send("Password length should be greater than 8 and less than 16.");
        }
    }

    if (dob) {
        const birthDate = new Date(dob);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - birthDate.getFullYear();

        if (age < 18 || (age === 18 && (currentDate.getMonth() < birthDate.getMonth() || 
            (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())))) {
            return res.send("Users must be 18 or older.");
        }
    }

    res.send("Signup successful!");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running live on "http://localhost:${PORT}`);
});






