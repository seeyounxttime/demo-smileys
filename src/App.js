import React, { useState } from "react";
const allItems = [
  { id: "beaming", value: "😁", isSmile: true },
  { id: "grinning", value: "😀", isSmile: true },
  { id: "squinting", value: "😝", isSmile: true },
  { id: "winking", value: "😉", isSmile: true },
  { id: "sad", value: "😓", isSmile: false },
];
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const [items, setItems] = useState(allItems);
  const removeItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };
  return (
    <div>
      <h1>Smileys</h1>
      <div className="loginControl">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
      <div>
        {isLoggedIn && (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <button onClick={() => removeItem(item.id)}>Remove</button>
                <label htmlFor="{`item.id-input`}">
                  {item.value} {item.id}
                </label>
                <input
                  type="text"
                  id={`item.id-input`}
                  defaultValue={item.id}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
