
const form = document.getElementById("contactForm");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const response = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("¡Mensaje enviado con éxito!");
      form.reset();
    } else {
      alert("Hubo un error al enviar tu mensaje. Intenta de nuevo.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Hubo un problema al conectar con el servidor.");
  }
});
