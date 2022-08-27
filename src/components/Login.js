import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {authorize} from '../utils/auth';

function Login ({handleLogin, setUserEmail}){
    const headerAuth = 'Вход';
    const nameButton = 'Войти';
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState(''); 
    const history = useHistory();

    function onLogin(e){
        e.preventDefault();
        authorize(email, password)
        .then((data)=>{
            if(data){
                localStorage.setItem('jwt', data.token);
                setUserEmail(email);
                handleLogin(true);
                history.push('/');
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    function handleInput(e){
        if(e.target.name==='email'){
            setEmail(e.target.value);
        }
        else{
            setPassword(e.target.value);
        }     
    }
return (
    <form className="formAuth" onSubmit={(e)=>{onLogin(e)}}> 
        <h2 className = "formAuth__title">{headerAuth}</h2>
        <input required type='email' className="formAuth__input formAuth__input_type_email" placeholder="Email" name="email" minLength="3" onChange={(e)=>{handleInput(e)}}></input>
        <input required type='text' className="formAuth__input formAuth__input_type_password" placeholder="Пароль" name="password" minLength="3" onChange={(e)=>{handleInput(e)}}></input>
        <button className="formAuth__button" type="submit">{nameButton}</button>
    </form>
)

}

export default Login;