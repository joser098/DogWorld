export const validation = (userData) => {
    let errors = {};

    if(!userData.name ){
        errors.name = "Name can't be empty"
    };
    if(!/^[A-Za-z\s]+$/.test(errors.name)){
        errors.name = "Name is obligatory and should be letters and spaces"
    };
    if(userData.name.length > 15){
        errors.name = "Name can't contains more than 15 characters"
    };

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = "Debe ser un correo electrónico valido"
    }
    if(!userData.email) {
        errors.mail = "Debe ingresar un correo electronico"
    }

    if(userData.email.length > 35) {
         errors.mail = "No puede contener mas de 35 caracteres"
        }

    if(userData.password.length < 6 || userData.password.length > 10) {
         errors.password = "Debe contener entre 6 y 10 caracteres"
        };

        return errors;
}
