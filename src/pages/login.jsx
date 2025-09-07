import { useState } from "react";

export default function Login() {
    const [inputEmail, setInputEmail] = useState(null);
    const [inputPassword, setInputPassword] = useState(null);

    return (
        <>
        <h2>Login</h2>
        <section>
            <input type="text" placeholder="Email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)}/>
            <input type="text" placeholder="Password" value={inputPassword} onChange={(e) => setInputPassword(e.target.value)}/>
            <button onClick={() => (useState)}>Login</button>
        </section>
        </>
    );
}