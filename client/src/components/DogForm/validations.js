export const validations = (dogToCreate) => {
    let errors = {};

    if(!dogToCreate.name.length ){
        errors.name = "Name can't be empty"
    };
    if(!/^[A-Za-z\s]+$/.test(dogToCreate.name)){
        errors.name = "Name is obligatory and should be letters and spaces"
    };
    if(dogToCreate.name.length > 15){
        errors.name = "Name can't contains more than 15 characters"
    };

    // Height
    if(!dogToCreate.height_min || !/^[0-9]+$/.test(dogToCreate.height_min)){
        errors.height_min = 'Minimun height should not be empty and should be numbers' 
    }
    if(dogToCreate.height_min < 15 || dogToCreate.height_min > 110){
        errors.height_min = 'Minimun height should be between 15 and 110' 
    };
    if(!dogToCreate.height_max || !/^[0-9]+$/.test(dogToCreate.height_max)){
        errors.height_max = 'Maximun height should not be empty and should be numbers' 
    };
    if(dogToCreate.height_max < 15 || dogToCreate.height_max > 110){
        errors.height_max = 'Maximun height should be between 15 and 110' 
    };

    // Weight
    if(!dogToCreate.weight_min || !/^[0-9]+$/.test(dogToCreate.weight_min)){
        errors.weight_min = 'Minimun weight should not be empty and should be numbers' 
    }
    if(dogToCreate.weight_min < 1 || dogToCreate.weight_min > 60){
        errors.weight_min = 'Minimun weight should be between 1 and 60' 
    };
    if(!dogToCreate.weight_max || !/^[0-9]+$/.test(dogToCreate.weight_max)){
        errors.weight_max = 'Maximun weight should not be empty and should be numbers' 
    };
    if(dogToCreate.weight_max < 3 || dogToCreate.weight_max > 90){
        errors.weight_max = 'Maximun weight should be between 3 and 90' 
    };

    // Life span
    if(!dogToCreate.life_span_min || !/^[0-9]+$/.test(dogToCreate.life_span_min)){
        errors.life_span_min = 'Minimun life_span should not be empty and should be numbers' 
    }
    if(dogToCreate.life_span_min < 7 || dogToCreate.life_span_min > 25){
        errors.life_span_min = 'Minimun life span should be between 7 and 15' 
    };
    if(!dogToCreate.life_span_max || !/^[0-9]+$/.test(dogToCreate.life_span_max)){
        errors.life_span_max = 'Maximun life_span should not be empty and should be numbers' 
    };
    if(dogToCreate.life_span_max < 8 || dogToCreate.life_span_max > 20){
        errors.life_span_max = 'Maximun life span should be between 8 and 20' 
    };

    // Image
    if(!dogToCreate.image){
        errors.image = "Image can't be empty"
    }
    if(!/\b(?:https?|ftp):\/\/\S+\.(?:jpg|jpeg|gif|png|bmp)\b/i.test(dogToCreate.image)){
        errors.image = 'Image should be a image Url (.jpg, .jpeg, .gif, .png)'
    };

    // Temperaments
    if(!dogToCreate.temperaments){
        errors.temperaments = 'Should add at least one temperament'
    };


    return errors;
};