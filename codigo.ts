function obtenerNombre(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Alejandra");
    }, 1000);
  });
}

async function saludar() {
  const nombre = await obtenerNombre();
  console.log(`Hola, ${nombre}`);
}

saludar();
