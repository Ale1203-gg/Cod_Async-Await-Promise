function manifestarDeseo(): Promise<string> {
  return new Promise((resolve) => {
    console.log("Manifestando mi deseo");
    setTimeout(() => {
      resolve(Un viaje a la playa");
    }, 2000);
  });
}

async function recibirUniverso(): Promise<void> {
  const deseo = await manifestarDeseo();
  const resultado = document.getElementById("resultado");
  if (resultado) {
    resultado.textContent = `El universo te ha enviado: ${deseo}`;
  }
}
