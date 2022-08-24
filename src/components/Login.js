function Login (){
    const headerAuth = 'Регистрация';
    const nameButton = 'Зарегистрироваться';
return (
    <form className="formAuth"> 
        <h2 className = "formAuth__title">{headerAuth}</h2>
        <input required type='email' className="formAuth__input formAuth__input_type_email" placeholder="Email" name="email" ></input>
        <input required type='text' className="formAuth__input formAuth__input_type_password" placeholder="Пароль" name="password"></input>
        <button className="formAuth__button" type='Submit'>{nameButton}</button>
    </form>
)

}

export default Login;