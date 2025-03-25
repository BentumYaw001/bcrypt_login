import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="App">
      {showLogin ? <Login /> : <Register />}
      <div onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? (
          <>
            Don't have an account? <span>Register</span>
          </>
        ) : (
          <>
            Already have an account? <span>Login</span>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
