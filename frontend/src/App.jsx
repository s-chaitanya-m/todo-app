import { useState } from "react";
import { BASE_URL } from "./utils/constants";

function App() {
  const [user, setUser] = useState();
  const getUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users`);
      const result = await response.json();
      setUser(result);
    } catch (error) {
      console.error("Error Connecting to DB", error);
    }
  };
  return (
    <div>
      <button onClick={getUser}>Get Users</button>
      <br />
      {user && <>{JSON.stringify(user, null, 2)}</>}
    </div>
  );
}

export default App;
