export const handleChange = (event, userData, setUserData) => {
    const { name, value } = event.target;
    setUserData({
        ...userData,
        [name]:value
    })
};

export const handleSubmit = () => {
    
}