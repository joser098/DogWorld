export const validations = (dogToCreate) => {
    let errors = {};

    if(!dogToCreate.name){
        errors.name = "Name can't be empty"
    };
    if(!/^[A-Za-z\s]+$/.test(dogToCreate.name)){
        errors.name = "Name should be letters and spaces"
    };
    if(dogToCreate.name.length > 15){
        errors.name = "Name can't contains more than 15 characters"
    };
};