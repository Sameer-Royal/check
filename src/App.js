
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { loginWithRedirect,isAuthenticated,logout,user} = useAuth0();
  return (
    <div>
        <button onClick={() => loginWithRedirect()}>Log In</button>;
        {isAuthenticated&&<h1>USER LOGIN</h1>}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
    {console.log(user)}
    </div>
  );
}

export default App;
