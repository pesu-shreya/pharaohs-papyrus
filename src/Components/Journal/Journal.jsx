import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthContext";

function Journal() {
    const [journals, setJournals] = useState([]);
    const [form, setForm] = useState({ date: "", content: "" });
    const { token } = useContext(AuthContext);

    useEffect(() => {
        if (token) {
            axios.get("/journals", { headers: { Authorization: `Bearer ${token}` } })
                .then(res => setJournals(res.data));
        }
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("/journals", form, { headers: { Authorization: `Bearer ${token}` } });
        setJournals([...journals, res.data]);
        setForm({ date: "", content: "" });
    };

    return (
        <div>
            <h2>Your Journal Entries</h2>
            <form onSubmit={handleSubmit}>
                <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} required />
                <textarea placeholder="Write your entry..." value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} required />
                <button type="submit">Add Entry</button>
            </form>
            <ul>
                {journals.map(j => (
                    <li key={j._id}>{j.date}: {j.content}</li>
                ))}
            </ul>
        </div>
    );
}

export default Journal;