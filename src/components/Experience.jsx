import "../styles/section.css";
import "../styles/form.css";

export default function Experience({
  data,
  isEditing,
  onChange,
  onSubmit,
  onEdit,
}) {
  const responsibilities = (data.responsibilities || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (isEditing) {
    return (
      <section className="section-card">
        <h2>Practical Experience</h2>

        <div className="form-grid">
          <label>
            Company Name
            <input
              type="text"
              value={data.company}
              onChange={(e) => onChange("company", e.target.value)}
              placeholder="Nike"
            />
          </label>

          <label>
            Position Title
            <input
              type="text"
              value={data.position}
              onChange={(e) => onChange("position", e.target.value)}
              placeholder="Software Engineer"
            />
          </label>

          <label>
            Date From
            <input
              type="text"
              value={data.dateFrom}
              onChange={(e) => onChange("dateFrom", e.target.value)}
              placeholder="Jan 2025"
            />
          </label>

          <label>
            Date Until
            <input
              type="text"
              value={data.dateUntil}
              onChange={(e) => onChange("dateUntil", e.target.value)}
              placeholder="Dec 2025"
            />
          </label>

          <label className="full-width">
            Main Responsibilities (one per line)
            <textarea
              value={data.responsibilities}
              onChange={(e) => onChange("responsibilities", e.target.value)}
              placeholder={"Built X feature...\nImproved Y...\nFixed Z..."}
              rows={5}
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
      <h2>Practical Experience</h2>

      <div className="display-block">
        <p><strong>Company:</strong> {data.company || "—"}</p>
        <p><strong>Position:</strong> {data.position || "—"}</p>
        <p>
          <strong>Dates:</strong>{" "}
          {(data.dateFrom || "—") + " – " + (data.dateUntil || "—")}
        </p>

        <div className="responsibilities">
          <strong>Responsibilities:</strong>
          {responsibilities.length ? (
            <ul>
              {responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>—</p>
          )}
        </div>
      </div>

      <div className="button-row">
        <button type="button" onClick={onEdit}>
          Edit
        </button>
      </div>
    </section>
  );
}
