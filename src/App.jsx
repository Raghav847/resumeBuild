import { useState } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/app.css"

export default function App() {
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isGeneralEditing, setIsGeneralEditing] = useState(true);

  const handleGeneralChange = (field, value) => {
    setGeneral((prev) => ({...prev, [field]: value}));
  };
  const [education, setEducation] = useState({
    school: "",
    studyTitle: "",
    studyDate: "",
  });
  const [isEducationEditing, setIsEducationEditing] = useState(true);

  const handleEducationChange = (field, value) => {
    setEducation((prev) => ({ ...prev, [field]: value }));
  };

  // --- Experience ---
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });
  const [isExperienceEditing, setIsExperienceEditing] = useState(true);

  const handleExperienceChange = (field, value) => {
    setExperience((prev) => ({ ...prev, [field]: value }));
  };

  return (
     <div className="app">
      <header className="app-header">
        <h1>CV Builder</h1>
        <p>Fill each section, submit to preview, edit to update.</p>
      </header>

      <main className="app-main">
        <General
          data={general}
          isEditing={isGeneralEditing}
          onChange={handleGeneralChange}
          onSubmit={() => setIsGeneralEditing(false)}
          onEdit={() => setIsGeneralEditing(true)}
        />

        <Education
          data={education}
          isEditing={isEducationEditing}
          onChange={handleEducationChange}
          onSubmit={() => setIsEducationEditing(false)}
          onEdit={() => setIsEducationEditing(true)}
        />

        <Experience
          data={experience}
          isEditing={isExperienceEditing}
          onChange={handleExperienceChange}
          onSubmit={() => setIsExperienceEditing(false)}
          onEdit={() => setIsExperienceEditing(true)}
        />
      </main>
    </div>
  );
}