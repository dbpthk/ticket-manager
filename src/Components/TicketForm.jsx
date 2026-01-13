import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

export default function TicketForm({ addTask }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    if (!name.trim() || !service.trim()) {
      //   alert("Please fill in all fields");
      return;
    }
    addTask({ name, service });
    setName("");
    setService("");
  };

  return (
    <>
      <form className="ticket-form" onSubmit={handleSubmit}>
        <h2>Add Customer</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter customer name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select a service</option>
            <option value="General">General</option>
            <option value="Technical">Technical</option>
            <option value="Billing">Billing</option>
          </select>
        </div>
        <button type="submit">
          <FaUserPlus /> Add User Ticket
        </button>
      </form>
    </>
  );
}
