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
`npx create-react-app mi-app`
