const EXTENSIONS_URL = "/data.json";
//Ir a buscar los datos y devolverlos
export async function getExtensions() {
  const response = await fetch(EXTENSIONS_URL);

  if (!response.ok) {
    throw new Error("Error al obtener las extensiones");
  }

  return response.json();
}
