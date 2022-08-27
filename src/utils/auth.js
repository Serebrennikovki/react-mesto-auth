const BASE__URL = 'https://auth.nomoreparties.co/';

export function register(email, password){
    console.log(email,password)
    return fetch(`${BASE__URL}signup`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            password:password,
            email:email})
    })
    .then((res)=>{
        if(res.ok){
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}

export function authorize(email, password){
    return fetch (`${BASE__URL}signin`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            password:password,
            email:email
        })   
    })
    .then((res)=>{
        if(res.ok){
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    })
}

export function checkJWT(token){
    return fetch(`${BASE__URL}users/me`,{
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
    .then((res)=>{
        if(res.ok){
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    })
}