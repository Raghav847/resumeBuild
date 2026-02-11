
export default function General({
    data,
    isEditing,
    onChange,
    onSubmit,
    onEdit,
}) {
    if (isEditing) {
        return (
            <section className="section-card">
                <h2>General Information</h2>

                <div className="form-grid">
                <label>
                    Full Name
                    <input
                    type="text"
                    value={data.name}
                    onChange={(e) => onChange("name", e.target.value)}
                    placeholder="Raghav Khandelwal"
                    />
                </label>

                <label>
                    Email
                    <input
                    type="email"
                    value={data.email}
                    onChange={(e) => onChange("email", e.target.value)}
                    placeholder="raghav@email.com"
                    />
                </label>

                <label>
                    Phone Number
                    <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => onChange("phone", e.target.value)}
                    placeholder="+1 (555) 555-5555"
                    />
                </label>
                </div>

                <div className="button-row">
                <button type="button" onClick={onSubmit}>
                    Submit
                </button>
                </div>
            </section>
        );
    }

    return (
        <section className="section-card">
            <h2>General Information</h2>

            <div className="display-block">
                <p><strong>Name:</strong> {data.name || "—"}</p>
                <p><strong>Email:</strong> {data.email || "—"}</p>
                <p><strong>Phone:</strong> {data.phone || "—"}</p>
            </div>

            <div className="button-row">
                <button type="button" onClick={onEdit}>
                Edit
                </button>
            </div>
        </section>
    );
}