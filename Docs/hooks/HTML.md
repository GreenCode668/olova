# 🎨 HTML - Your Magic Building Blocks!

Hey there, web artist! 👋 Let's learn about HTML elements and how Olova.js helps
us create them!

## 🤔 Quick Start Without Build Tools

The fastest way to start is using Olova.js directly in your HTML file:

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>My Olova App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
      import { html, render } from "//unpkg.com/olova";

      const App = () => {
        return html(
          "div",
          null,
          html("h1", null, "Hello World! ✨"),
          html("p", null, "Welcome to my app!")
        );
      };

      render(App, document.getElementById("root"));
    </script>
  </body>
</html>
```

### Simple Counter Example Without Build

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Olova Counter</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
      import { html, render, setSignal } from "//unpkg.com/olova";

      const Counter = () => {
        const [count, setCount] = setSignal(0);

        return html(
          "div",
          null,
          html("h1", null, "Counter: ", () => count()),
          html(
            "button",
            {
              onClick: () => setCount(count() + 1),
            },
            "Add One!"
          )
        );
      };

      render(Counter, document.getElementById("root"));
    </script>
  </body>
</html>
```

## 🤔 What is the html Function?

Think of the `html` function as a magical wand that creates elements on your
webpage. It's like having a special tool that can create any HTML element you
want!

## 🎮 Two Ways to Create Elements

### 1. Using JSX (The Easy Way)

```jsx
import { Fragment } from "olova";

// This is what we write - it looks like HTML!
const Button = () => {
  return <button className="cool-button">Click Me!</button>;
};
```

### 2. Using the html Function (What Actually Happens)

```jsx
import { html } from "olova";

// This is what the computer sees
const Button = () => {
  return html("button", { className: "cool-button" }, "Click Me!");
};
```

## 🌟 Simple Examples

### 1. Simple Text

```jsx
// Using JSX
const Text = () => {
  return <p>Hello, World!</p>;
};

// Using html function
const Text = () => {
  return html("p", null, "Hello, World!");
};
```

### 2. Button with Click

```jsx
// Using JSX
const Button = () => {
  return <button onClick={() => alert("Hi!")}>Say Hi</button>;
};

// Using html function
const Button = () => {
  return html("button", { onClick: () => alert("Hi!") }, "Say Hi");
};
```

### 3. Nested Elements

```jsx
// Using JSX
const Card = () => {
  return (
    <div className="card">
      <h2>Title</h2>
      <p>Content</p>
    </div>
  );
};

// Using html function
const Card = () => {
  return html(
    "div",
    { className: "card" },
    html("h2", null, "Title"),
    html("p", null, "Content")
  );
};
```

## 🎨 How the html Function Works

The `html` function takes three main parts:

1. **Element Type**: What to create (`"div"`, `"button"`, etc.)
2. **Props**: Special settings (like `className` or `onClick`)
3. **Children**: What goes inside the element

```jsx
html(
  "element-type", // what to create
  { props }, // special settings
  ...children // what goes inside
);
```

## 🎯 Remember

- JSX turns into `html` function calls
- The `html` function creates real HTML elements
- Props go in an object as the second argument
- Children can be text or other elements
- `null` means no props are needed

## 🎮 Try It Yourself!

Here's a simple profile card to try both ways:

```jsx
// Using JSX
const ProfileCard = ({ name, role }) => {
  return (
    <div className="profile">
      <img src="avatar.png" alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

// Using html function
const ProfileCard = ({ name, role }) => {
  return html(
    "div",
    { className: "profile" },
    html("img", { src: "avatar.png", alt: name }),
    html("h3", null, name),
    html("p", null, role)
  );
};
```

## 🌈 Have Fun!

Now you know how Olova.js creates elements both ways! You can write easy-to-read
JSX, and the computer turns it into `html` function calls! Try creating your own
elements both ways! 🚀

## 🎨 Three Ways to Use Olova.js

### 1. Direct in Browser (No Build Tools)

```html
<script type="module">
  import { html, render } from "//unpkg.com/olova";

  const App = () => {
    return html("p", null, "Hello world");
  };

  render(App, document.getElementById("root"));
</script>
```

### 2. Using JSX (With Build Tools)

```jsx
import { render } from "olova";

const App = () => {
  return <p>Hello world</p>;
};

render(App, document.getElementById("root"));
```

### 3. Using html Function (With Build Tools)

```jsx
import { html, render } from "olova";

const App = () => {
  return html("p", null, "Hello world");
};

render(App, document.getElementById("root"));
```
