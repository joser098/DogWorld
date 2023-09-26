
# **DOGS** | Proyecto Individual

## **📌 OBJETIVOS**

-  Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  Poner en práctica recursos básicos de estilos y diseño (UX : UI).
-  Afirmar y conectar los conceptos aprendidos en la carrera.
-  Aprender mejores prácticas.
-  Aprender y practicar el workflow de GIT.
-  Utilizar y practicar testing.

<br />

## **⚠️ IMPORTANTE**

Es necesario contar minimamente con la última versión estable de NodeJS y NPM. Asegúrate de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto. Actualmente las versiónes necesarias son:

-  **Node**: 12.18.3 o mayor
-  **NPM**: 6.14.16 o mayor

Para verificar que versión tienes instalada:

```bash
node -v
npm -v
```

**ACLARACIÓN:** las dependencias actuales se encuentran en las versiones que venimos trabajando durante el bootcamp.

-  **react**: 17.0.1
-  **react-dom**: 17.0.1
-  **react-router-dom**: 5.2.0
-  **redux**: 4.0.5
-  **react-redux**: 7.2.3

---

### **🖱 BACK-END**

#### **📍 GET | /dogs**

#### **📍 GET | /dogs/:idRaza**

-  Esta ruta obtiene el detalle de una raza específica. Es decir que devuelve un objeto con la información pedida en el detalle de un perro.
-  La raza es recibida por parámetro (ID).
-  Tiene que incluir los datos de los temperamentos asociadas a esta raza.
-  Debe funcionar tanto para los perros de la API como para los de la base de datos.

#### **📍 GET | /dogs/name?="..."**

-  Esta ruta debe obtener todas aquellas razas de perros que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
-  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
-  Si no existe la raza, debe mostrar un mensaje adecuado.
-  Debe buscar tanto los de la API como los de la base de datos.

#### **📍 POST | /dogs**

-  Esta ruta recibirá todos los datos necesarios para crear un nuevo perro y relacionarlo con los temperamentos asociados.
-  Toda la información debe ser recibida por body.
-  Debe crear la raza de perro en la base de datos, y esta debe estar relacionada con los temperamentos indicados (al menos uno).

#### **📍 GET | /temperaments**

-  Obtiene todos los temperamentos existentes.
-  Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

<br />

---

<br />

### **🖱 FRONT-END**

**📍 LANDING PAGE |

<br />

**📍 HOME PAGE |** la página principal de tu SPA debe contener:

<br />

**📍 DETAIL PAGE |** en esta vista se deberá mostrar toda la información específica de un perro:

-  ID.
-  Imagen.
-  Nombre.
-  Altura.
-  Peso.
-  Temperamentos.
-  Años de vida.

<br />

**📍 FORM PAGE |**: en esta vista se encontrará el formulario para crear una nueva raza de perro.

Este formulario debe ser **controlado completamente con JavaScritp**. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

-  Nombre.
-  Altura **(diferenciar entre altura mínima y máxima de la raza)**.
-  Peso **(diferenciar entre peso mínimo y máximo de la raza)**.
-  Años de vida.
-  Posibilidad de seleccionar/agregar varios temperamentos en simultáneo.
-  Botón para crear la nueva raza.
---

<br />

<img src="./dogs.jpg" alt="" width="1000px" />
