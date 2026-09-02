/**
 * ============================================================================
 * 🎓 EVALUACIÓN DIAGNÓSTICA — BLOQUE C: JAVASCRIPT & DOM (CE3)
 * ============================================================================
 * 
 * 📌 REQUERIMIENTOS:
 * C2. Declara variables usando exclusivamente 'let' y 'const' (NO usar 'var').
 * C3. Crea al menos una función nombrada (ej: function generarSaludo(...) { ... }).
 * C4. Selecciona un elemento del DOM con querySelector() o querySelectorAll()
 *     y modifica su contenido (.textContent o .innerHTML) o estilo.
 * C5. Agrega interactividad escuchando eventos con addEventListener()
 *     (por ejemplo al hacer click en #btn-saludar o #btn-limpiar).
 */

// C2. Selección de elementos del DOM con const
const inputNombre = document.querySelector('#input-nombre');
const btnSaludar = document.querySelector('#btn-saludar');
const btnLimpiar = document.querySelector('#btn-limpiar');
const mensajeResultado = document.querySelector('#mensaje-resultado');

// C3. Función nombrada para procesar el saludo
function generarSaludo(nombre) {
  if (nombre === '') {
    return 'Por favor ingresa un nombre.';
  }
  return 'Hola, ' + nombre + '. Bienvenido al Panel UETS.';
}

// C4 y C5. Evento click en btn-saludar: modifica el DOM
btnSaludar.addEventListener('click', function () {
  const nombre = inputNombre.value;
  const saludo = generarSaludo(nombre);
  mensajeResultado.textContent = saludo;
});

// C5. Evento click en btn-limpiar: reinicia el estado
btnLimpiar.addEventListener('click', function () {
  inputNombre.value = '';
  mensajeResultado.textContent = 'Esperando interacción...';
});