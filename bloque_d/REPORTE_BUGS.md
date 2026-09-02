# 🐛 Reporte de Bugs Encontrados y Corregidos (Bloque D)
**Estudiante:** Jonnathan Javier Guaman Matute  
**Paralelo:** [E1 / E2] | **Fecha:** [DD/MM/2026]  

---

## 1. 🔍 Bug de HTML Encontrado (D1)
- **¿Qué fallaba?:** El archivo `index.html` tenía tres problemas: el `<link>` apuntaba a un archivo CSS inexistente (`estilos-rotos.css`), la etiqueta `<header>` no estaba cerrada correctamente, y el segundo input de notas (`nota2`) no tenía atributo `id`, al igual que el botón de calcular.
- **Causa Raíz:** Sin el `id` correcto en el input y el botón, JavaScript no podía seleccionarlos con `document.querySelector()`, por lo que la interactividad no funcionaba. El `<header>` sin cerrar rompía el anidamiento correcto del árbol DOM, y el `href` incorrecto impedía que se aplicaran los estilos.
- **Solución Aplicada:** Cambié el `href` a `estilos.css`, cerré la etiqueta `</header>` antes de la sección del formulario, y agregué `id="nota2"` al segundo input e `id="btn-calcular"` al botón.

---

## 2. 🔍 Bug de CSS Encontrado (D2)
- **¿Qué fallaba?:** En `estilos.css`, la propiedad `display: flexer;` no es un valor válido de CSS, y `cursor: pointing-hand;` tampoco existe como valor de `cursor`.
- **Causa Raíz:** Al ser propiedades o valores mal escritos, el navegador los ignora silenciosamente (no lanza error visible), por lo que el `body` no se centraba con Flexbox y el botón no mostraba el cursor de mano al pasar el mouse.
- **Solución Aplicada:** Corregí `display: flexer;` a `display: flex;`, y `cursor: pointing-hand;` a `cursor: pointer;`. De paso corregí `align-item` a `align-items` (con "s"), que también era inválido.

---

## 3. 🔍 Bug de JavaScript Encontrado (D3)
- **¿Qué fallaba?:** El selector del segundo input apuntaba a `#nota_inexistente` (un ID que no existe), el botón se buscaba con `.btn-calcular` (una clase que tampoco existe en el HTML), los valores de los inputs se usaban sin convertir a número, y se escribía `cajaResultado.textContnt` (con typo) en vez de `textContent`.
- **Causa Raíz:** `document.querySelector()` devuelve `null` si no encuentra el elemento, lo que rompía el script al intentar usar `.value` sobre `null`. Además, `input.value` siempre devuelve un `string`, así que al sumar dos strings con `+` se generaba una concatenación de texto (ej. "9" + "8" = "98") en vez de una suma matemática. Por último, `textContnt` no es una propiedad válida del DOM, por lo que esa línea no hacía nada.
- **Solución Aplicada:** Cambié el selector a `#nota2`, cambié `.btn-calcular` a `#btn-calcular`, envolví ambos valores en `parseFloat()` antes de calcular el promedio, corregí `textContnt` a `textContent`, y además corregí la fórmula `a + b / 2` a `(a + b) / 2`, ya que por precedencia de operadores el original calculaba mal el promedio incluso con números correctos.

---

## 4. ✅ Verificación en Consola del Navegador (D5)
- [x] Presioné F12 en el navegador.
- [x] Fui a la pestaña **Console**.
- [x] Verifiqué que **NO aparezca ningún error en rojo**.