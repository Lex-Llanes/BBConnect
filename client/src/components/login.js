const Login = ({user}) =>{

    return (
        <nav>
        <ul>
            {!user ? (<li> <a href="/login">Login</a></li>) 
            : (<li> Hello, {user.nickname} <a href="/logout">Logout</a></li>)}
        </ul>
      </nav>
    )
}

export default Login;