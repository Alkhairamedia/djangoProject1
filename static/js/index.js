const menu = document.querySelector(".menu_button");
const menu_icon = document.querySelector(".menu_icon");
const header_nav = document.querySelector(".header_nav");
const navbar_div = document.querySelector(".navbar_div");
const attendance_list = document.querySelector(".attendance_list");
const attendance = document.querySelector(".attendance");
const assignment_list = document.querySelector(".assignment_list");
const assignment = document.querySelector(".assignment");
const student_list = document.querySelector(".student_list");
const student = document.querySelector(".student");

const attendances_list = document.querySelector(".attendances_list");
const attendances = document.querySelector(".attendances");
const assignments_list = document.querySelector(".assignments_list");
const assignments = document.querySelector(".assignments");
const students_list = document.querySelector(".students_list");
const students = document.querySelector(".students");


menu.addEventListener("click", () => {
  menu_icon.classList.toggle("menuRoll_icon");
  header_nav.classList.toggle("headers_nav");
})

menu.addEventListener("click", () => {
  navbar_div.classList.toggle("navbar_dis");
})

attendance_list.addEventListener("click", () => {
  attendance.classList.toggle("attendance_show");
})

assignment_list.addEventListener("click", () => {
  assignment.classList.toggle("assignment_show");
})

student_list.addEventListener("click", () => {
  student.classList.toggle("assignment_show");
})

attendances_list.addEventListener("click", () => {
  attendances.classList.toggle("attendance_show");
})

assignments_list.addEventListener("click", () => {
  assignments.classList.toggle("assignment_show");
})

students_list.addEventListener("click", () => {
  students.classList.toggle("assignment_show");
})