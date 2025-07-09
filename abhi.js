const skillDescriptions = {
  "C / C++": "C and C++ are powerful programming languages used for system/software development and competitive programming.",
  "HTML": "HTML is the standard markup language for creating websites and web apps using elements and tags.",
  "CSS": "CSS is used to control layout, color, spacing, and styling of HTML pages.",
  "Communication": "Good communication helps you express your ideas effectively and work better in teams.",
  "Management": "Management skills include leadership, planning, and organization to complete tasks efficiently.",
  "Creativity": "Creativity helps in innovation, design, and unique problem solving.",
  "AutoCAD": "AutoCAD is software used for creating precise 2D/3D engineering drawings.",
  "CAD Tool": "CAD tools are used by engineers and designers to model, draft, and simulate products.",
  "Teamwork": "Teamwork is essential for successful collaboration, group tasks, and achieving common goals."
};

// Remove previous messages
function clearSkillMessages() {
  document.querySelectorAll(".skill-message").forEach(el => el.remove());
}

// On skill click → insert message above it
document.querySelectorAll(".skill").forEach(skill => {
  skill.addEventListener("click", function () {
    clearSkillMessages();
    const skillKey = this.dataset.skill;
    const message = skillDescriptions[skillKey] || "No description available.";

    const descDiv = document.createElement("div");
    descDiv.className = "skill-message";
    descDiv.textContent = message;

    this.parentNode.insertBefore(descDiv, this);
  });
});
