function getNameById(value) {
  // Verificar si el valor existe como clave en el objeto `ids`
  return ids[value] || ""; // Si no existe, devolver cadena vacía
}


export default getNameById;

const ids =
  {}
