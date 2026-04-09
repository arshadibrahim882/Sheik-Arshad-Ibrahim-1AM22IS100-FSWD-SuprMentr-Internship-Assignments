import { useState } from "react";
import API from "../api";

function Signup() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.post("/auth/signup", form);
        alert("Signup Successful");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
            <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
            <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
            <button>Signup</button>
        </form>
    );
}

export default Signup;