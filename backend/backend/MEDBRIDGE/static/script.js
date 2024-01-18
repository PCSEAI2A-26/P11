let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  ThemeToggle.classList.remove("active");
};


document.addEventListener("DOMContentLoaded", function() {
  const appointmentForm = document.getElementById("appointment-form");
  const appointmentsList = document.getElementById("appointments");

  appointmentForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;

      const appointment = {
          name,
          email,
          date,
          time
      };

      // Add the appointment to the list
      addAppointmentToList(appointment);

      // Clear the form
      appointmentForm.reset();
  });

  function addAppointmentToList(appointment) {
      const li = document.createElement("li");
      li.innerHTML = `<strong>Name:</strong> ${appointment.name}<br>
                      <strong>Email:</strong> ${appointment.email}<br>
                      <strong>Date:</strong> ${appointment.date}<br>
                      <strong>Time:</strong> ${appointment.time}`;
      appointmentsList.appendChild(li);
    }
});
