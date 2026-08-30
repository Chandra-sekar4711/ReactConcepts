# React Notes – Props, Lists & Conditional Rendering

# 1. Props

## What are Props?

Props (**Properties**) are used to pass data **from Parent Component → Child Component**.

**Data Flow:**

```text
Parent
   │
   ▼
 Props
   │
   ▼
Child
```

Props are **read-only (immutable)**. A child component should never modify props.

---

## Parent Component

```jsx
<Header
    name="John"
    age={25}
/>
```

---

## Child Component

```jsx
function Header(props) {
    return (
        <>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
        </>
    );
}
```

---

## Destructuring Props (Recommended)

Instead of:

```jsx
function Header(props) {
    return <h1>{props.name}</h1>;
}
```

Use:

```jsx
function Header({ name, age }) {
    return (
        <>
            <h1>{name}</h1>
            <h2>{age}</h2>
        </>
    );
}
```

---

## Types of Props

```jsx
<Header
    name="John"                  // String
    age={25}                     // Number
    isAdmin={true}               // Boolean
    skills={["Java","React"]}    // Array
    Accessing Array via map

    user={{id:1,name:"John"}}    // Object
    onClick={saveEmployee}       // Function
/>
```
# `Object.keys()` vs `Object.entries()` in `map()`

### `Object.keys(obj)`

Returns an **array of strings**.

```js
Object.keys(city);
// ["name", "hobby"]
```

Each item is a **single string**, so use:

```js
Object.keys(city).map((key) => ...)
```

✅ `key` = `"name"`, `"hobby"`

---

### `Object.entries(obj)`

Returns an **array of arrays**.

```js
Object.entries(city);
// [
//   ["name", "Chennai"],
//   ["hobby", "Cricket"]
// ]
```

Each item is an array like:

```js
["name", "Chennai"]
```

So destructure it:

```js
Object.entries(city).map(([key, value]) => ...)
```

This is equivalent to:

```js
.map((entry) => {
  const [key, value] = entry;
})
```

---

## Easy Rule

* **Single value** → `(item)`
* **Array** → `([a, b])`
* **Object** → `({ name, age })`

### Remember

* `Object.keys()` → Array of **strings** → `(key)`
* `Object.values()` → Array of **values** → `(value)`
* `Object.entries()` → Array of **[key, value] arrays** → `([key, value])`


---

## Interview Points

✔ Parent → Child communication

✔ Read-only (cannot modify props)

✔ Destructure props for cleaner code

✔ Can pass any JavaScript value


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 2. Rendering Lists (.map())

Use `.map()` to convert an array into JSX elements.

Example:

```jsx
const employees = [
    { id:1, name:"John" },
    { id:2, name:"Peter" }
];

return (
    <>
        {
            employees.map(emp =>
                <h2 key={emp.id}>
                    {emp.name}
                </h2>
            )
        }
    </>
);
```

---

# Why use `key`?

`key` gives every list item a **stable unique identity**.

React uses it during **Reconciliation** to determine:

* Added items
* Removed items
* Updated items
* Moved items

Without `key`, React compares by position.

With `key`, React compares by identity.

Think of `key` as an **Employee ID**.

---

## Rules

✅ Use unique IDs

```jsx
key={employee.id}
```

❌ Avoid

```jsx
key={Math.random()}
```

❌ Avoid array index for dynamic lists

```jsx
key={index}
```

Use index only for static lists that never change.

---

## Important Interview Point

`key` is **not passed as a prop**.

```jsx
<Employee
    key={emp.id}
    name={emp.name}
/>
```

Inside Employee:

```jsx
props.key      // undefined
props.name     // Works
```

React uses `key` internally.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 3. Conditional Rendering

Conditional Rendering means displaying different UI based on a condition.

---

## 1. Ternary Operator

Use when there are **two possible outputs**.

```jsx
{
    isLogin
        ? <Home />
        : <Login />
}
```

Equivalent to:

```java
if(isLogin)
    Home;
else
    Login;
```

---

## 2. && Operator

Use when something should be displayed **only if the condition is true**.

```jsx
{
    isAdmin &&
    <AdminPanel />
}
```

If `isAdmin` is false, React renders nothing.

Equivalent to:

```java
if(isAdmin){
    show AdminPanel;
}
```

---

## 3. Early Return

Use when the **entire component UI changes**.

```jsx
function App(){

    if(!isLogin){
        return <Login />;
    }

    return <Dashboard />;
}
```

This is cleaner than wrapping the whole JSX in conditions.

---

# Which One Should I Use?

| Situation                | Best Choice     |
| ------------------------ | --------------- |
| Two choices              | Ternary (`? :`) |
| Show only when true      | `&&`            |
| Entire component changes | Early Return    |

---

# Interview Summary

## Props

* Parent → Child communication
* Read-only
* Supports destructuring
* Can pass any JS value (string, number, object, array, function)

---

## Rendering Lists

* Use `.map()` to render arrays.
* Every list item needs a unique `key`.
* Prefer database IDs.
* Avoid `Math.random()` and indexes for dynamic lists.
* `key` is only for React; it is not available in `props`.

---

## Conditional Rendering

* `? :` → if/else
* `&&` → render only if true
* Early return → return different UI before the main JSX

---

# Memory Tricks

**Props** → Parent gives data to Child.

**map()** → Array → JSX.

**key** → Employee ID (stable identity).

**Ternary** → Two choices.

**&&** → Show only when true.

**Early Return** → Exit early with different UI.
