# 🚀 Olova.js

A lightweight, reactive JavaScript framework for building modern web
applications. Olova.js provides a simple yet powerful API for creating reactive
UIs with JSX support.

## ✨ Features

- 🎯 **Signals** - Reactive state management
- 🔄 **Effects** - Automatic dependency tracking and side effects
- 📝 **Memos** - Computed values with dependency tracking
- 🎨 **JSX Support** - Write components using familiar JSX syntax
- 🎭 **Components** - Function-based component system
- 🔗 **Refs** - Direct DOM node references
- 🎪 **Lifecycle Hooks** - `onMount` and `onUnmount` for component lifecycle
  management
- 🧩 **Fragments** - Support for multiple root elements
- 🎨 **SVG Support** - First-class SVG element support

## 📦 Installation

```bash
# Create a new project (recommended)
npm create vilo@latest

# Or install directly in an existing project
npm install olova
```

For now, you can use it directly in your project by copying the core files.

## 🚀 Quick Start Guide

### 1. Basic Counter Example

A simple counter showing reactive state management:

```jsx
import { render, setSignal } from "./core/core.js";

const Counter = () => {
  const [count, setCount] = setSignal(0);

  return (
    <div>
      <h1>{() => count()}</h1>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
    </div>
  );
};
```

### 2. Multiple Elements with Fragment

Using fragments to render multiple elements:

```jsx
import { render, Fragment } from "./core/core.js";

const MultipleElements = () => {
  return (
    <>
      <div>First</div>
      <div>Second</div>
    </>
  );
};
```

### 3. Effects and Reactivity

Demonstrating reactive effects:

```jsx
import { render, setSignal, setEffect } from "./core/core.js";

const EffectsExample = () => {
  const [name, setName] = setSignal("John");

  setEffect(() => {
    console.log(`Name changed to: ${name()}`);
  });

  return (
    <div>
      <input
        value={() => name()}
        onInput={(e) => setName(e.target.value)}
        type="text"
      />
      <p>Current name: {() => name()}</p>
    </div>
  );
};
```

### 4. Computed Values with Memos

Using memos for derived state:

```jsx
import { render, setSignal, setMemo } from "./core/core.js";

const MemoExample = () => {
  const [firstName, setFirstName] = setSignal("John");
  const [lastName, setLastName] = setSignal("Doe");

  const fullName = setMemo(() => `${firstName()} ${lastName()}`);

  return (
    <div>
      <input
        value={() => firstName()}
        onInput={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <input
        value={() => lastName()}
        onInput={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <p>Full name: {() => fullName()}</p>
    </div>
  );
};
```

### 5. DOM References with Refs

Direct DOM manipulation using refs:

```jsx
import { render, setRef } from "./core/core.js";

const RefsExample = () => {
  const inputRef = setRef();

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={() => inputRef().focus()}>Focus Input</button>
    </div>
  );
};
```

### 6. Component Lifecycle

Managing component lifecycle with hooks:

```jsx
import { render, setSignal, onMount, onUnmount } from "./core/core.js";

const LifecycleExample = () => {
  const [isVisible, setIsVisible] = setSignal(true);

  const ChildComponent = () => {
    onMount(() => {
      console.log("Component mounted");
    });

    onUnmount(() => {
      console.log("Component will unmount");
    });

    return <div>Hello World</div>;
  };

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible())}>
        {() => (isVisible() ? "Hide" : "Show")}
      </button>
      {() => isVisible() && <ChildComponent />}
    </div>
  );
};
```

### 7. List Rendering

Building a dynamic todo list:

```jsx
import { render, setSignal } from "./core/core.js";

const TodoList = () => {
  const [todos, setTodos] = setSignal([
    { id: 1, text: "Learn Olova.js" },
    { id: 2, text: "Build an app" },
  ]);

  const [newTodo, setNewTodo] = setSignal("");

  const addTodo = () => {
    if (newTodo().trim()) {
      setTodos([...todos(), { id: Date.now(), text: newTodo() }]);
      setNewTodo("");
    }
  };

  return (
    <div>
      <div>
        <input
          value={() => newTodo()}
          onInput={(e) => setNewTodo(e.target.value)}
          placeholder="New todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {() =>
          todos().map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button
                onClick={() =>
                  setTodos(todos().filter((t) => t.id !== todo.id))
                }
              >
                Delete
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
```

### 8. Conditional Rendering

Different patterns for conditional rendering:

```jsx
import { render, setSignal } from "./core/core.js";

const Conditional = () => {
  const [show, setShow] = setSignal(false);
  const [theme, setTheme] = setSignal("light");

  return (
    <div>
      <button onClick={() => setShow(!show())}>Toggle Content</button>
      <button onClick={() => setTheme(theme() === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>

      {/* Simple conditional */}
      {() => (show() ? <p>Content is shown</p> : <p>Content is hidden</p>)}

      {/* Conditional with multiple elements */}
      {() =>
        theme() === "light" ? (
          <div style={{ background: "white", color: "black" }}>Light Theme</div>
        ) : (
          <div style={{ background: "black", color: "white" }}>Dark Theme</div>
        )
      }

      {/* Conditional rendering with && operator */}
      {() => show() && <p>This only shows when show is true</p>}
    </div>
  );
};
```

### 9. Components and Props

Creating and using reusable components with props:

```jsx
import { render } from "./core/core.js";

// Button component with props
const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#0070f3",
        color: "white",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

// Using the Button component
const App = () => {
  return (
    <div>
      <h1>Component Example</h1>
      <Button text="Click me!" onClick={() => alert("Button clicked!")} />
      <Button
        text="Another button"
        onClick={() => console.log("Second button clicked")}
      />
    </div>
  );
};
```

This example shows:

- How to create a reusable component with props
- Passing different props to multiple instances
- Handling events through props
- Applying inline styles to components

## 🛠️ API Reference

### Core Functions

| Function                  | Description                                |
| ------------------------- | ------------------------------------------ |
| `setSignal(initialValue)` | Creates a reactive signal                  |
| `setEffect(effectFn)`     | Creates an effect that tracks dependencies |
| `setMemo(computeFn)`      | Creates a computed value                   |
| `setRef()`                | Creates a ref for DOM elements             |
| `render(component, root)` | Renders a component to the DOM             |
| `onMount(callback)`       | Runs when component mounts                 |
| `onUnmount(callback)`     | Runs when component unmounts               |
| `Fragment`                | Wrapper for multiple elements              |
| `html`                    | Internal function for DOM creation         |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License

## 👨‍💻 Author

Nazmul Hossain

---

For more information and updates, please check back regularly as this framework
continues to evolve.

> 💡 **Pro Tip**: Check out the `examples` directory in the source code for more
> detailed examples and best practices!
