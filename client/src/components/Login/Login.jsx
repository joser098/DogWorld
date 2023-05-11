const Login = () => {
    return(
        <div>
            <form >
                <h3>Welcome to DogWorld</h3>
                <input type="email"
                       name="email"
                       placeholder="Email"/>
                <input type="text"
                       name="password"
                       placeholder="Password"/>
                <button>Log In</button>

                <label>Don't have an account</label>
                <a href="/register">Register</a>

                {
                    //Boton log in debe redirigir al Home y guardar sesion en localStorage
                }
            </form>
        </div>
    )
};


export default Login;
