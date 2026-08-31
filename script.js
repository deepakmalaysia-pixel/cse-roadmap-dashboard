const dropdowns = document.querySelectorAll(".dropdown-btn");
dropdowns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.classList.toggle("show");
  });
});

const students = [
  { name: "Student 1", profileUrl: "https://linktr.ee/student1" },
  { name: "Student 2", profileUrl: "https://linktr.ee/student2" },
  { name: "Student 3", profileUrl: "https://linktr.ee/student3" }
];

const studentProfilesList = document.querySelector("#student-profiles");

if (studentProfilesList) {
  students.forEach(student => {
    const item = document.createElement("li");
    const link = document.createElement("a");

    link.href = student.profileUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = student.name;

    item.appendChild(link);
    studentProfilesList.appendChild(item);
  });
}
