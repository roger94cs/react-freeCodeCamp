# Curso de React

freeCodeCamp

Estructura.

- Conceptos básicos de React.
- Descargar e instalar Node.js.
- JavaScript XML (JSX).
- Estructura básica de una aplicación de react.
- Proyecto 1: Clon de testimonios de freeCodeCamp.
- Proyecto 2: Contador de clics.
- Proyecto 3: Calculadora.
- Proyecto 4: Aplicación de tareas.
- Compoentes de clase.
- Adaptar los primeros dos proyectos con componentes de clase.
  - Clon de testimonios de freeCodeCamp.
  - Contador de Clics.

## ¿Que es React?

Biblioteca de JavaScript de código abierto diseñada para crear interfaces de usuario.

## Biblioteca

Conjunto de implementacones o subprogramas que podemos usar en nustro código.

## Ventajas de React

- Facil de aprender y usar.
- Componentes reutilizables.
- Crear aplicaciones dinámicas.
- Buen desempleño.

## Conceptos básicos

### Componente

Parte de la interfaz de usuario que es independiente y reusable.

Dentro de los componentes tenemos dos tipos principales:  

- Funcionales.
- De clase.

#### Componente funcional

Función de JavaScript/ES6 que retorna un elemento de React (JSX).

~~~javascript
function Saludo(props) {
    return <h1> ¡Hola mundo, {props.nombre}!</h1>
}
~~~

##### Características

- Debe retornar un elemento de React (JSX).
- Debe comenzar con una letra mayúscula.
- Puede recibir valores si es necesario.

### Props

Argumentos que puede recibir un componente de React.
Los **props** solo pueden ser enviados de "padre a hijo".

#### Componente de Clase

Clase de ES6 (JavaScript moderno) que retorna un elemento JSX.

~~~javascript
class Saludo extends React.Component {
    render() {
        return <h1>¡Hola, {this.props.nombre}!</h1>
    }
}
~~~

##### Características

- Debe extender React.Component.
- Debe tener un metodo render() para retornar un elemento de JSX.
- Puede recibir valores si es necesario.

### Estado

Representación en JavaScript del conjunto de propiedades de un componente y sus valores actuales.

##### ¿Por qué Componentes de Clase?

Anteriormente, usábamos componentes de clase para poder trabajar con "estados" de nuestros componentes.  
En versiones anteriores de React (anteriores a 16.8), **no** podíamos hacerlo en componentes funcionales.  
Luego..  
¡Hooks! (Anzuelos - Ganchos)

### Hook

Función especial que te permite trabajar con estados en componentes funcionales y otros aspectos de React.  
**Sin** escribir un compoente de clase.  
Esto nos permite escribir código mucho más conciso y fácil de entender.

### Event Listener (Event Handler)

Función en JavaScript que es ejecutada cuando ocurre un evento específico.

## Introducción a JSX (JavaScript XML)

Extensión de React Para la sintaxis de JavaScript.  
Nos permite describir en JavaScript cómo se verán los componentes usando una estructura similar a HTML.

### Ventajas de JSX

- Estructura más fácil de visualizar.
- Errores y advertencias más útiles.
**JSX es opcional**

Ejemplo:

~~~javascript
const elemento = <h1>!Hola, Mundo¡</h1>;
~~~

### Elementos en JSX

Elemento: unidades más pequeñas en React.  
Definen lo que se ve en la pantalla.


### Elemento VS Componente

Los compoentes en React están "hechos" de elementos.

### React DOM

Paquete de facilita la interracción y actualización del DOM en aplicaciones React.

### DOM

Document Object Model.  
Represntación de todos los elementos que conforman una página o aplicación web.

### Elementos

Con JSX, puedes crear y usar cualquier elemento HTML.  

### ¿Cómo reconocerlos?

### Etiquetas.

En JSX, los **elementos** HTML se representan con etiquetas en letras **minúsculas**.  
Los **compoentes** definidos por el usuario comienzan con una letra **mayúscula**.

### Atributos

Puedes agregar **atributos**  a tus elementos en JSX para especificar ciertas características.  
Pero.. algunos se escriben de forma distinta si los comparamos con HTML.

HTML  

~~~html
<h1 class="titulo-azul"></h1>
~~~

JSX

~~~html
<h1 className="titulo-azul"></h1>
~~~

¿Por qué debemos cambiar el nombre?  
**class** es una palabra reservada en JavaScript que podemos usar para crear una clase. Por eso necesitamos escribir este atributo de forma distinta en JSX.

HTML  

~~~html
<label for="css">CSS</label>
~~~

JSX

~~~html
<label htmlFor="css">CSS</label>
~~~

El atributo **style** acepta un objeto JavaScript con propiedades CSS escritas en **camelCase**.

CSS

~~~css
background-image
background-color
font-family
~~~

JSX

~~~javascript
backgroundImage
backgroundColor
fontFamily
~~~

Ejemplo:

~~~javascript
const estiloDiv = {
    color: 'yellow',
    backgroundColor: 'black'
}
~~~

~~~html
<div style={estiloDiv}>¡Hola, Mundo!</div>
~~~

Otra alternativa:

~~~html
<!-- Estilo específico en línea -->
<div style={{color: 'yellow'}}>¡Hola, Mundo!</div>
~~~

Primer par de llaves inserta código JavaScript.  
Segundo par de llaves Objeto JavaScript.

### Atributos del DOm reconocidos por React

[dom-elements](https://reactjs.org/docs/dom-elements.html)

## Estructura (de un componente)

Al igual que en HTML, los elementos pueden ser **anidados** en JSX para formar estructuras más complejas.

### Renderizar componentes

HTML

~~~html
<div id="root></div>
~~~

JSX

~~~javascript
import ReactDOM from 'react-dom';

const elemento = <h1>¡Hola, Mundo!</h1>;

ReactDOM.render(
    elemento,
    document.getElementById('root')
);
~~~

### Self-Closing Tags

Elemento que solo posee una etiqueta de apertura ya que no contiene texto u otros elementos.  
Ejemplo:

~~~html
<img src="logo.png" alt="Mi imagen"/>
~~~

### JavaScript en JSX

{JS}

~~~javascript
let adjetivo = "Interesante";

<p>React es {adjetivo}</p>
~~~

Puedes escribir cualquier expresión válida en JavaScript entre las llaves y su valor será reemplazado.

~~~javascript
<p>El resultado es:  {5 * 6}</p>

let nombre= "Gino";

<p>Su nombre es: {nombre.toUppperCase()}</p>
~~~

---

Comando para crear una aplicación con react:  
`npx create-react-app my-app`

Si tienes una carpeta creada puedes usar un punto al final para no incluir el nombre:  
`npx create-react-app .`

## Proyecto 1: Clon de freeCodeCamp

`npx create-react-app testimonios-freecodecamp`

## Proyecto 2: Contador de clics

`npx create-react-app contador-de-clics`

## Proyecto 3: Calculadora Interactiva

`npx create-react-app calculadora`

## Proyecto 4: Aplicación de Tareas

`npx create-react-app app-tareas`

## Componentes de Clase

### Componente de Clase

Clase de ES6 (JavaScript moderno) que retorna un elemento JSX.

### Estructura

- Métodos
- Estado

### Método

Función asociada a un compoenente que puede acceder  y usar su estado.

~~~javascript
import React from 'react';

class NombreComponente extends React.Component {

}
~~~

### Características

- Deben extender React.Component
- Deben tener un método render() para retornar un elemento de JSX.
- Pueden recibir props si es necesario.

### Método render()

Método que retorna la estructura del componente en JSX.  
Es el único método obligatorio para un componente de clase en React.

~~~javascript
class NombreComponente extends React.Component {
    render() {
        return <p>Mi Compoente</p>
    }
}
~~~

### ¿Por qué Compoentes de Clase?

Anteriormente, usábamos componentes de clase para poder trabajar con "estados" de nuestros componentes.  
En versiones anteriores de React (anteriores a 16.8), **no** podíamos hacerlo en compoentes funcionales.

### ¿Son relavantes?

Si.


### Claves

- "No hay plaes para eliminar las clases de React".
- "No hay prisa por migrar a los Hooks".
- "Pretendemos que Hooks cubra todos los casos de uso existentes para las clases, pero seguiremos soportando los compoentes de clase en un futuro previsible".

### props

Los componentes de clase también pueden recibir props.  
Para acceder a un prop:

`this.props.nombreDelProp`

Ej:

~~~javascript
class Saludo extends React.Component {
    render() {
        return <h1>¡Hola, {this.props.nombre}!</h1>;
    }
}
~~~

### this en Componentes de Clase

this se refiere al componente actual.

### Constructor

Método usado para inicializar el estado de un componente de REact.  
Es llamado automáticamente cuando se crea el componente.

~~~javascript
class Tarea extends REact.Component {
    constructor() {
        super();
        this.state = {completada: true};
    }

    render() {
        return <p>Mi tarea</p>;
    }
}
~~~

Debe de llamanr a **super()** para heredar todas las funciones de su componente "padre" (React.Component).

### props en el Constructor

Si el componente tiene un método constructor y recibe props, deben ser pasados al **constructor** y a **super()**.

~~~javascript
class Tarea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <p>Mi Tarea</p>
    }
}
~~~

### Estado en el Constructor

El objeto "**state**" (estado) se inicializa en el constructor.

~~~javascript
class Tarea extends React.Component {
    constructor() {
        super();
        this.state = {completada: true};
    }

    render() {
        return <p> Mi Tarea</p>
    }
}
~~~

Puede tener varias propiedades separadas por comas.

~~~javascript
class Tarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completada: true,
            color: "azul",
            prioridad: 1
        };
    }

    render() {
        return <p> Mi Tarea</p>;
    }
}
~~~

### Accediendo al estado

`this.state.propiedad`

~~~javascript
class Tarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completada: true,
            color: "azul",
            prioridad: 1
        };
    }

    render() {
        return <p> Mi Tarea tiene prioridad: {this.state.prioridad}</p>;
    }
}
~~~

### Actualizando el estado

Para actualizar el estado una o más propiedades del objeto "state", se llama a **this.setState()**  
Y se pasa como argumento un objeto con las propiedades que se van a actualizar y sus nuevos valores.

`this.setState();`

~~~javascript
this.setState({
    completada: false,
    color: "verde"
})
~~~

### Métodos de Ciclo de Vida

Métodos especiales de React usados para realizar operaciones con compoenentes en momentos específicos de su vida en el DOM.

## Testimonios freeCodeCamp con Componentes de Clase

