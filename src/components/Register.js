import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {register} from '../utils/auth.js';

function Register(props){
    const headerAuth = 'Регистрация';
    const nameButton = 'Зарегистрироваться';
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState(''); 
    const history = useHistory();

    function onRegistration(e){
        e.preventDefault();
        register(email, password)
        .then((data)=>{
            if(data){
                console.log(data);
                history.push('/signin');
                props.onResultAuth(true);
            }
            else{
                console.log(data);
                props.onResultAuth(false);
            }
        })
        .catch((err)=>{
            console.log(err);
            props.onResultAuth(false);
        })
        console.log(email,password);
    }

    function handleInput(e){
        console.log(e);
        if(e.target.name==='email'){
            setEmail(e.target.value);
        }
        else{
            setPassword(e.target.value);
        }     
    }
 

    return (
        <form className="formAuth" onSubmit={(e)=>{onRegistration(e)}}> 
            <h2 className = "formAuth__title">{headerAuth}</h2>
            <input required type='email' name='email' className="formAuth__input formAuth__input_type_email" placeholder="Email" minLength="3" onChange={(e)=>{handleInput(e)}}></input>
            <input required type='text' name='password' className="formAuth__input formAuth__input_type_password" placeholder="Пароль" minLength="3" onChange={(e)=>{handleInput(e)}}></input>
            <button className="formAuth__button" type="submit" >{nameButton}</button>
            <a className="formAuth__link" href="/signin">Уже зарегистрированы? Войти</a>
        </form>
    )
}

export default Register;