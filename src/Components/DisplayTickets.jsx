export default function DisplayTickets({ tasks, updateStatus, deleteTask }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "var(--warning)";
      case "in-progress":
        return "var(--success)";
      case "completed":
        return "var(--info)";
      default:
        return "var(--text)";
    }
  };

  return (
    <div className="ticket-display">
      {tasks.length === 0 ? (
        <p className="empty-ticket">
          No tickets available. Please add a ticket.
        </p>
      ) : (
        <div className="ticket-list">
          {tasks.map((customer) => (
            <div className="ticket-item" key={customer.id}>
              <div className="customer-info">
                <h3>{customer.name}</h3>
                <p>{customer.service}</p>
                <span
                  className="status"
                  style={{ color: getStatusColor(customer.status) }}
                >
                  {customer.status}
                </span>
              </div>
              <div className="actions">
                {customer.status === "waiting" && (
                  <button
                    className="start-btn"
                    onClick={() => updateStatus(customer.id, "in-progress")}
                  >
                    start
                  </button>
                )}
                {customer.status === "in-progress" && (
                  <button
                    className="complete-btn"
                    onClick={() => updateStatus(customer.id, "completed")}
                  >
                    complete
                  </button>
                )}
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(customer.id)}
                >
                  Delete
                </button> 
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
