### **1. Funciones (Functions) 🛠️**

Una función es un bloque de código reutilizable diseñado para realizar una tarea específica. Piensa en ella como una máquina a la que le das una entrada (los argumentos) y te devuelve una salida (el valor de retorno).
- **Sintaxis básica:**
    ```JavaScript
    function nombreDeLaFuncion(parametro1, parametro2) {
      // Código que se ejecuta
      return resultado; // Opcional
    }
    ```
- **Para tu reto:** Necesitas una función que reciba dos valores: el total de la cuenta y el porcentaje de la propina.
---
### **2. Variables (Variables) 📦**
Las variables son contenedores que guardan valores. Usa `let` o `const` para declararlas.
- **`const`**: Para valores que no van a cambiar.
- **`let`**: Para valores que pueden cambiar.
- **Para tu reto:** Usarás variables para guardar el total de la cuenta, el porcentaje de propina y el resultado del cálculo. `const` es una buena opción si los valores de entrada no van a cambiar dentro de la función.

---

### **3. Operadores Aritméticos (Arithmetic Operators) ➕➖✖️➗**
Estos operadores te permiten realizar cálculos matemáticos

|Operador|Descripción|
|---|---|
|`+`|Suma|
|`-`|Resta|
|`*`|Multiplicación|
|`/`|División|
|`%`|Módulo (resto de una división)|

- **Para tu reto:** Usarás el operador de multiplicación (`*`) y la división (`/`) para calcular la propina, y la suma (`+`) para obtener el total final.

### **Fórmula para el cálculo**
Para calcular la propina, necesitas multiplicar el total de la cuenta por el porcentaje de la propina y dividirlo entre 100.
```JavaScript
(Total de la Cuenta * Porcentaje de Propina) / 100
```

Con estos conceptos, estás listo para crear la función `calcularPropina()`. ¡Adelante!