function validate() {
    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', validateFormHandler);
    let isCompanyCheckbox = document.getElementById('company');
    isCompanyCheckbox.addEventListener('change', onIsCompanyHandler);


    function validateFormHandler(e) {
        let usernameInput = document.getElementById('input');
        let usernameRegex = /^[a-z0-9]{3, 20}$/
        let usernameIsValid = usernameRegex.test(usernameInput.value);
        setBorder(usernameInput, usernameIsValid);
    
        let passwordRegex = /^\w{5, 15}$/;
        let passwordInput = document.getElementById('password');
        let confirmPasswordInput = document.getElementById('confirm-password');
        let passwordIsValid = passwordRegex.test(passwordInput.value);
        let confirmPasswordIsValid = passwordRegex.test(confirmPasswordInput.value);
        let passwordsAreOk = passwordIsValid && confirmPasswordIsValid && 
        passwordInput.value === confirmPasswordInput.value;
        setBorder(passwordInput, passwordsAreOk);
        setBorder(confirmPasswordInputm, passwordsAreOk);
        

        let emailRegex = /^.*@.*\..*$/;
        let emailInput = document.getElementById('email');
        let emailIsValid = emailRegex.test(emailInput.value);
        setBorder(emailInput, emailIsValid);
    }

        function onIsCompanyHandler(e) {
            let companyInfoField = document.getElementById('companyInfo');
            companyInfoField.style.display = e.target.checked ? 'block' : 'none';
        }
    
    
    
        function setBorder(element, isValid) {
            if(isValid) {
                element.style.setProperty('border', 'none');
            } else {
                element.style.setProperty('border-color', '2px solid red');
            }
            
        }

}
