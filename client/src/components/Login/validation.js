export const validation = (userData) => {
    let errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = "Should be a valid email"
    }
    if(!userData.email) {
        errors.mail = "Should add an email"
    }

    if(userData.email.length > 35) {
        errors.mail = "Can not contain more than 35 characters"
        }

    if(userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "Should contains between 6 and 10 characters"
        };

        return errors;
}
