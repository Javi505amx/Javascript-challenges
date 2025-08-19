### **Nivel 1: Conceptos Fundamentales**

¡Bienvenido al primer nivel de tu camino para ser un Master en JavaScript! En esta etapa, el objetivo es consolidar los cimientos del lenguaje. Te enfrentarás a desafíos que reforzarán tu comprensión de variables, tipos de datos, operadores y estructuras de control. Cada reto está diseñado para que practiques y te familiarices con la sintaxis y la lógica básica de JavaScript.

---
### **🏆 Lista de Retos**

#### **Reto 1: Calculadora de Propinas**

- **Objetivo:** Practicar la manipulación de números y la creación de funciones.
- **Descripción:** Crea una función llamada `calcularPropina` que reciba dos argumentos: `totalCuenta` (un número) y `porcentajePropina` (un número). La función debe devolver el valor de la propina y, opcionalmente, el total final.
    
- **Ejemplo:
    ```js
    calcularPropina(100, 15); // Debe retornar 15 (la propina)
    calcularPropina(50, 20); // Debe retornar 10
    ```
    

#### **Reto 2: Conversor de Unidades**

- **Objetivo:** Utilizar sentencias condicionales (`if`/`else if`/`else` o `switch`).
- **Descripción:** Crea una función llamada `convertirUnidades` que tome un valor numérico y una cadena de texto que especifique la unidad de entrada (`'C'` para Celsius o `'F'` para Fahrenheit). La función debe devolver el valor convertido a la otra unidad.
    
- **Fórmulas:
    - **Celsius a Fahrenheit:** `(C * 9/5) + 32
    - **Fahrenheit a Celsius:** `(F - 32) * 5/9
- **Ejemplo:**
    ```js
    convertirUnidades(30, 'C'); // Debe retornar 86 (Fahrenheit)
    convertirUnidades(68, 'F'); // Debe retornar 20 (Celsius)
    ```

#### **Reto 3: Juego "Piedra, Papel o Tijera"**

- **Objetivo:** Combinar lógica, funciones y manejo de valores aleatorios.
- **Descripción:** Desarrolla un pequeño juego en el que tú te enfrentes a la computadora
    1. Crea una función que elija aleatoriamente una de las tres opciones para la computadora.
    2. Pide al usuario que ingrese su elección.
    3. Crea una función que compare ambas opciones y determine al ganador.
    4. Muestra el resultado final (`'¡Ganaste!'`, `'¡Perdiste!'` o `'¡Empate!'`).
        
- **Conceptos a utilizar:**
    
    - Variables.
    - Funciones.
    - Lógica condicional.
    - `Math.random()` para la elección de la computadora.