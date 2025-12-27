import { loginWithEmail, googleSignIn } from './auth.js';

const loginForm = document.getElementById('loginForm');
const googleBtn = document.getElementById('googleLogin');

loginForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await loginWithEmail(email, password);
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to homepage
    } catch(err){
        if(err.code === 'auth/user-not-found'){
            alert('User not found! Please signup first.');
        } else if(err.code === 'auth/wrong-password'){
            alert('Incorrect password!');
        } else {
            alert(err.message);
        }
        console.error(err);
    }
});

// Google Login
googleBtn.addEventListener('click', async ()=>{
    try {
        await googleSignIn();
        alert('Google Login successful!');
        window.location.href = 'index.html';
    } catch(err){
        if(err.code === 'auth/unauthorized-domain'){
            alert('Google Sign-In not allowed on this domain. Use localhost or deployed domain.');
        } else {
            alert(err.message);
        }
        console.error(err);
    }
});
