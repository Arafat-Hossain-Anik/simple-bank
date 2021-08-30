document.getElementById('login-submit').addEventListener('click', function () {
    console.log('Button Submit Clicked');
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userEmail);
    console.log(userPassword);
    if (userEmail == 'arafatskd@gmail.com' && userPassword == 'secret') {
        console.log('valid user');
        alert("Login Sucessfull!!");
        window.location.href = 'banking.html'
    }
    else {
        alert("Wrong Credential!");
    }
});