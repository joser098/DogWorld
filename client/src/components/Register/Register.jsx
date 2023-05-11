const Register = () => {
    return(
        <div>
            <form>
                <h3>Register for doggy experience</h3>
            <label htmlFor="info">Complete all info</label>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="Password"/>
            <button>Register</button>

            <label>Have an account</label>
            <a href="/">Log In</a>
            {
                // Boton register debe guardar datos en DB y redirigir al home

            }
            </form>
        </div>
    )
};

export default Register;