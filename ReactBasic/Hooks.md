# React Concepts Used in This Project

This document captures all React concepts I have used across this project, separated from JavaScript basics.

---

## 1. Function Components

Every component in this project is a **Function Component**. React components are just JavaScript functions that return JSX.

```jsx
function MainPage() {
    return <div>Hello</div>
}
```

Used in: `App.jsx`, `MainPage.jsx`, `Props.jsx`, `Table.jsx`, `Events.jsx`

---

## 2. JSX (JavaScript XML)

JSX allows writing HTML-like syntax inside JavaScript. It gets compiled to `React.createElement()` calls.

Key rules used:
- Single parent element (wrapper `<div>` or `<>...</>` fragment)
- Expressions inside `{}` curly braces
- `className` instead of `class`
- Self-closing tags must have `/>` (e.g. `<input ... />`)

Used in: All `.jsx` files

---

## 3. React Fragments (`<>...</>`)

Used to group multiple elements without adding an extra DOM node.

```jsx
return (
    <>
        <h2>Title</h2>
        <p>Content</p>
    </>
)
```

Used in: `Props.jsx`, `Table.jsx`, `Events.jsx`

---

## 4. Component Composition & Nesting

Parent components import and render child components inside them. This is the foundation of React's component model.

```jsx
function MainPage() {
    return (
        <div>
            <Props data={data} />
            <Events />
            <Table />
        </div>
    )
}
```

Used in: `MainPage.jsx`, `App.jsx`

---

## 5. Props (Properties)

Props are how **Parent → Child** data flows. Props are **read-only** and received as an object by the child.

```jsx
// Parent passes
<Props data={data} arr={arr} obj={obj} fun={adddata} />

// Child receives
function Props(props) { ... }
```

Types passed:
- String: `data="Hello"`
- Array: `arr={["a","b"]}`
- Object: `obj={{name:"Keshav"}}`
- Function: `fun={adddata}`

Used in: `MainPage.jsx` (parent), `Props.jsx` (child), `Table.jsx`

---

## 6. Props Destructuring

Instead of accessing `props.data`, we destructure the props object directly in the function parameter for cleaner code.

```jsx
function Props({ data, arr, obj, fun, children }) {
    // data, arr, obj are now directly available
}
```

Also used for function component parameters:

```jsx
export default function Table({ users }) { ... }
```

Used in: `Props.jsx`, `Table.jsx`

---

## 7. Children Prop

A special prop that lets a parent pass **JSX elements** inside a component. The child renders them using `{children}`.

```jsx
// Parent
<Props>
    <button>Click Me</button>
</Props>

// Child
function Props({ children }) {
    return <>{children}</>
}
```

Used in: `MainPage.jsx` (parent), `Props.jsx` (child - via `children` parameter)

---

## 8. `React.cloneElement()`

Used to **clone an existing child element and inject new props** into it. Here it's used to attach an `onClick` handler to a button passed as a child.

```jsx
const newChild = React.cloneElement(children, {
    onClick: fun
});
return <>{newChild}</>
```

Used in: `Props.jsx`

---

## 9. Rendering Lists with `.map()`

Convert an array into a list of JSX elements using `.map()`. Every item needs a **unique `key`** prop.

```jsx
{arr.map((values) => <p key={values}>{values}</p>)}
```

Used in: `Props.jsx`

---

## 10. `key` Prop

Gives each list item a **stable identity**. React uses it during **Reconciliation** to efficiently update the DOM. `key` is internal to React and NOT available inside the child component as a prop.

```jsx
{arr.map((values) => <p key={values}>{values}</p>)}
{Object.entries(obj).map(([keys, value]) => <p key={keys}>{keys}: {value}</p>)}
```

Used in: `Props.jsx`

---

## 11. Rendering Object Data

Used `Object.values()` and `Object.entries()` to iterate over object properties and render them as JSX.

```jsx
{Object.values(obj).map((value, index) => <p key={index}>Obj{value}</p>)}
{Object.entries(obj).map(([keys, value]) => <p key={keys}>{keys}: {value}</p>)}
```

Used in: `Props.jsx`

---

## 12. useState Hook (State Management)

`useState` adds **memory** to a function component. It returns the current state value and a setter function.

```jsx
const [count, setCount] = useState(0);
```

Used in:
- `MainPage.jsx` - Counter state (number)
- `Events.jsx` - Form data state (object)

---

## 13. Functional State Updates

When the new state depends on the **previous state**, pass a function to the setter. This avoids stale state issues.

```jsx
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

React batches these updates and applies them together.

Used in: `MainPage.jsx`

---

## 14. State with Object

State can hold an object. When updating one field, spread the previous state to **never mutate state directly**.

```jsx
const [data, setdata] = useState({ fname: "", address: "" });

setdata({ ...data, [name]: value });
```

Used in: `Events.jsx`

---

## 15. Event Handling (onClick, onChange, onSubmit)

React uses **camelCase** event names. Events receive a synthetic event object.

```jsx
<button onClick={adddata}>Click</button>
<input onChange={(events) => adddatas(events)} />
<form onSubmit={submit}>...</form>
```

Used in: `MainPage.jsx`, `Events.jsx`

---

## 16. Controlled Components / Controlled Forms

Input values are **tied to React state**. React is the single source of truth for the input's value.

```jsx
<input
    value={data.fname}
    onChange={(events) => adddatas(events)}
/>
```

Used in: `Events.jsx`

---

## 17. Event.preventDefault()

Prevents the browser's default form submission behavior (page reload). Required when handling form submission in React.

```jsx
const submit = (event) => {
    event.preventDefault();
    // handle submission
}
```

Used in: `Events.jsx`

---

## 18. Destructuring Event Object

Extract specific fields from the event target directly instead of accessing `event.target.value` separately.

```jsx
const { value, name } = events.target;
```

Used in: `Events.jsx`

---

## 19. Dynamic Key in State Update

Use **computed property names** (`[name]: value`) to update the correct field in an object state.

```jsx
setdata({ ...data, [name]: value });
```

Used in: `Events.jsx`

---

## 20. useEffect Hook (Side Effects)

`useEffect` runs code **after the component renders** — for side effects like logging, data fetching, subscriptions, etc.

```jsx
useEffect(() => {
    console.log("UseEffect Rendering");
}, []);
```

The empty dependency array `[]` means it runs **only once** after the initial render (componentDidMount equivalent).

Used in: `MainPage.jsx`

---

## 21. Default Export vs Named Export

- **Default export**: Used when a file exports one main thing. Imported without braces.

```jsx
// Table.jsx
export default function Table({ users }) { ... }

// Import
import Table from './Table.jsx';
```

- **Named export**: Used when a file exports multiple things. Imported with braces.

```jsx
// MainPage.jsx
export { MainPage }

// Import
import { MainPage } from './Components/MainPage'
```

Used in: All `.jsx` files

---

## 22. React 18 createRoot API

The new way to bootstrap a React 18+ app. Replaces the old `ReactDOM.render()`.

```jsx
import { createRoot } from 'react-dom/client';
createRoot(document.getElementById('root')).render(<App />);
```

Used in: `main.jsx`

---

## 23. StrictMode

Wraps the app in development mode to highlight potential problems (double-invoking certain functions, deprecated APIs, etc.).

```jsx
import { StrictMode } from 'react'
<StrictMode>
    <App />
</StrictMode>
```

Used in: `main.jsx`

---

## Summary Table

| Concept | Where Used |
|---------|-----------|
| Function Components | All `.jsx` files |
| JSX | All `.jsx` files |
| Fragments | Props.jsx, Table.jsx, Events.jsx |
| Component Composition | MainPage.jsx, App.jsx |
| Props | MainPage.jsx → Props.jsx, App.jsx → MainPage.jsx |
| Props Destructuring | Props.jsx, Table.jsx |
| Children Prop | MainPage.jsx → Props.jsx |
| cloneElement | Props.jsx |
| Rendering Lists (.map) | Props.jsx |
| key Prop | Props.jsx |
| Object.values/entries rendering | Props.jsx |
| useState | MainPage.jsx, Events.jsx |
| Functional State Updates | MainPage.jsx |
| Object State | Events.jsx |
| Event Handling (onClick, onChange, onSubmit) | MainPage.jsx, Events.jsx |
| Controlled Components | Events.jsx |
| preventDefault | Events.jsx |
| Dynamic key in state | Events.jsx |
| useEffect | MainPage.jsx |
| Default Export | Table.jsx |
| Named Export | MainPage.jsx, Props.jsx |
| createRoot (React 18) | main.jsx |
| StrictMode | main.jsx |


=============================================================


useref
========

* create a useref() and inject it into tag with ref ={} then access the tag  and manipulate direct dom without render 
* it create a container and store the prev value so it is also helpful to store and compare prev value and it stay alive for rerenders 

React router dom
===================

* Browserroutes ->Routes ->Route -> path="" ,element ={<Page>}

1) Link -> User click button to naviagate
2) usenavigate -> Program deceides which page to navigate which user click interaction
3) 404 erro page trigrre is done by 






