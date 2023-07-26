import React from "react";


export default function Login(){
     return(
            <form onSubmit={handleSubmit}>
              <div>
                <input type="text" placeholder="Email"/>
              </div>
              <div>
                <label>Password:</label>
                <input type="password" placeholder="Password"/>
              </div>
              <button type="submit">Login</button>
            </form>
     );
}