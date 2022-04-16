import { defineCustomElement } from 'vue';
import HelloWorld from './components/HelloWorld.ce.vue';
import './styles/index.css';

// console.log('HelloWorld.styles', HelloWorld.styles); // ["/* inlined css */"]

// convert into custom element constructor
const HelloWorldCustomElement = defineCustomElement(HelloWorld);

// export individual elements
// export { HelloWorldV2CustomElement, TableV2CustomElement };

// export function register() {
customElements.define('HelloWorld', HelloWorldCustomElement);
// }
