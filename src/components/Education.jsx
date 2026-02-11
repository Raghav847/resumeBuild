import "../styles/section.css";
import "../styles/form.css";

export default function Education({
  data,
  isEditing,
  onChange,
  onSubmit,
  onEdit,
}) {
  if (isEditing) {
    return (
      <section className="section-card">
        <h2>Education</h2>

        <div className="form-grid">
          <label>
            School Name
            <input
              type="text"
              value={data.school}
              onChange={(e) => onChange("school", e.target.value)}
              placeholder="Washington State University"
            />
          </label>

          <label>
            Title of Study
            <input
              type="text"
              value={data.studyTitle}
              onChange={(e) => onChange("studyTitle", e.target.value)}
              placeholder="M.S. Computer Science"
            />
          </label>

          <label>
            Date of Study
            <input
              type="text"
              value={data.studyDate}
              onChange={(e) => onChange("studyDate", e.target.value)}
              placeholder="Aug 2024 – Dec 2025"
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
      <h2>Education</h2>

      <div className="display-block">
        <p><strong>School:</strong> {data.school || "—"}</p>
        <p><strong>Study:</strong> {data.studyTitle || "—"}</p>
        <p><strong>Date:</strong> {data.studyDate || "—"}</p>
      </div>

      <div className="button-row">
        <button type="button" onClick={onEdit}>
          Edit
        </button>
      </div>
    </section>
  );
}
