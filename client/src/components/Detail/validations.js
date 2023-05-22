export const validations = (dogToCreate) => {
    let errors = ''
  
    const checkName = (name) => {
        if(!/^[A-Za-z\s]+$/.test(name)){
            errors = "Name should be letters and spaces"
        };
        if(name.length > 15){
            errors = "Name can't contains more than 15 characters"
        };
    }

    // Height
    const checkHeight = (height_min, height_max) => {
        if(!/^[0-9]+$/.test(height_max)){
            errors = 'Maximun height should be numbers' 
        };
        if(height_max < 15 || height_max > 110){
            errors = 'Maximun height should be between 15 and 110' 
        };
        if(!/^[0-9]+$/.test(height_min)){
            errors = 'Minimun height should be numbers' 
        }
        if(height_min < 15 || height_min > 110){
            errors = 'Minimun height should be between 15 and 110' 
        };
    }

    // Weight
    const checkWeight = (weight_min, weight_max) => {
        if(!/^[0-9]+$/.test(weight_max)){
            errors = 'Maximun weight should be numbers' 
        };
        if(weight_max < 3 || weight_max > 90){
            errors = 'Maximun weight should be between 3 and 90' 
        };
        if(!/^[0-9]+$/.test(weight_min)){
            errors = 'Minimun weight should be numbers' 
        }
        if(weight_min < 1 || weight_min > 60){
            errors = 'Minimun weight should be between 1 and 60' 
        };
    }

    // Image
    const checkImage = (image) => {
        if(!/\b(?:https?|ftp):\/\/\S+\.(?:jpg|jpeg|gif|png|bmp)\b/i.test(image)){
            errors = 'Image should be a image Url (.jpg, .jpeg, .gif, .png)'
        };
    }

    // Life span
    const checkLifeSpan = (life_span_min, life_span_max) => {
        if(!/^[0-9]+$/.test(life_span_max)){
            errors = 'Maximun life span should be numbers' 
        };
        if(life_span_max < 8 || life_span_max > 20){
            errors = 'Maximun life span should be between 8 and 20' 
        };
        if(!/^[0-9]+$/.test(life_span_min)){
            errors = 'Minimun life span should be numbers' 
        }
        if(life_span_min < 7 || life_span_min > 25){
            errors = 'Minimun life span should be between 7 and 15' 
        };
    }


    checkLifeSpan(dogToCreate.life_span_min,dogToCreate.life_span_max)
    checkImage(dogToCreate.image)
    checkWeight(dogToCreate.weight_min, dogToCreate.weight_max)
    checkHeight(dogToCreate.height_min, dogToCreate.height_max)
    checkName(dogToCreate.name)

    return errors
};