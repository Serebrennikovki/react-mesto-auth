import logo from '../images/Vector_logo.svg'

function Header(){
 return (
    <header className="header">
    <img className="header__logo" src={logo} alt="лого"/>
    </header>
 )   
}

export default Header;