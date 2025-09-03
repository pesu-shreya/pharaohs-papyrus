import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthContext";

function Events() {
    const [events, setEvents] = useState([]);
    const [form, setForm] = useState({ title: "", description: "", start: "", end: "" });
    const { token } = useContext(AuthContext);

    useEffect(() => {
        if (token) {
            axios.get("/events", { headers: { Authorization: `Bearer ${token}` } })
                .then(res => setEvents(res.data));
        }
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("/events", form, { headers: { Authorization: `Bearer ${token}` } });
        setEvents([...events, res.data]);
        setForm({ title: "", description: "", start: "", end: "" });
    };

    return (
        <div>
            <h2>Your Events</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
                <input placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
                <input type="datetime-local" value={form.start} onChange={e => setForm({ ...form, start: e.target.value })} required />
                <input type="datetime-local" value={form.end} onChange={e => setForm({ ...form, end: e.target.value })} required />
                <button type="submit">Add Event</button>
            </form>
            <ul>
                {events.map(ev => (
                    <li key={ev._id}>{ev.title} ({ev.start} - {ev.end})</li>
                ))}
            </ul>
        </div>
    );
}

export default Events;