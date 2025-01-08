//import React from 'react'

function Login(props) {
  //objeto usuario
  const user = {
    username: "Estefania",
    email: "e@mail.com",
  };

  //funcion que hace login con el evento clic
  //y pasa la info al componente padre con props
  const handleClick = () => {
    // eslint-disable-next-line react/prop-types
    props.handleLogin(user);
  };
  return (
    <section>
      <h2>Login</h2>
      <button onClick={handleClick}>Login</button>
    </section>
  );
}

export default Login;
