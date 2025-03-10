# 🚀 No-Build Olova Apps

Hey there! 👋 Want to create an Olova app super quickly? Let's do it without any
build tools!

## 🎮 Complete Counter Example

Copy this code into a file named `index.html` and open it in your browser:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Olova Counter</title>
    <style>
      .container {
        max-width: 500px;
        margin: 50px auto;
        text-align: center;
        font-family: Arial, sans-serif;
      }
      .counter {
        font-size: 48px;
        margin: 20px 0;
        color: #333;
      }
      .buttons {
        display: flex;
        gap: 10px;
        justify-content: center;
      }
      button {
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;
      }
      .increment {
        background: #4caf50;
        color: white;
      }
      .decrement {
        background: #f44336;
        color: white;
      }
      .reset {
        background: #2196f3;
        color: white;
      }
      button:hover {
        opacity: 0.8;
        transform: scale(1.05);
      }
    </style>
  </head>
  <body>
    <div id="root"></div>

    <script type="module">
      import { html, render, setSignal, setEffect } from "//unpkg.com/olova";

      const Counter = () => {
        // Create our counter signal
        const [count, setCount] = setSignal(0);

        // Watch for count changes
        setEffect(() => {
          document.title = `Count: ${count()}`;
        });

        // Create our counter component
        return html(
          "div",
          { className: "container" },
          // Title
          html("h1", null, "Magic Counter ✨"),

          // Counter display
          html("div", { className: "counter" }, () => count()),

          // Buttons
          html(
            "div",
            { className: "buttons" },
            html(
              "button",
              {
                className: "decrement",
                onClick: () => setCount(count() - 1),
              },
              "Subtract 1"
            ),

            html(
              "button",
              {
                className: "reset",
                onClick: () => setCount(0),
              },
              "Reset"
            ),

            html(
              "button",
              {
                className: "increment",
                onClick: () => setCount(count() + 1),
              },
              "Add 1"
            )
          ),

          // Status message
          html("p", null, "Current value is: ", () =>
            count() === 0 ? "zero" : count() > 0 ? "positive" : "negative"
          )
        );
      };

      // Render our app
      render(Counter, document.getElementById("root"));
    </script>
  </body>
</html>
```

## 🎨 What's Happening Here?

1. **Setup**: We create a simple HTML file with some nice CSS styles
2. **Import**: We get Olova.js directly from unpkg
3. **State**: We use `setSignal` to create our counter
4. **Effect**: We use `setEffect` to update the page title
5. **Render**: We create our UI using the `html` function
6. **Display**: Everything shows up when we open the file!

## 🎯 Try These Changes:

1. Add a multiply button:

```js
html(
  "button",
  {
    onClick: () => setCount(count() * 2),
  },
  "Double"
);
```

2. Add a color effect:

```js
html(
  "div",
  {
    style: {
      color: () => (count() > 0 ? "green" : count() < 0 ? "red" : "black"),
    },
  },
  () => count()
);
```

3. Add a counter history:

```js
const [history, setHistory] = setSignal([]);

// In your buttons:
onClick: () => {
  const newCount = count() + 1;
  setCount(newCount);
  setHistory([...history(), newCount]);
};

// Display history:
html("div", { className: "history" }, "History: ", () => history().join(", "));
```

## 🌈 Have Fun!

Now you can create Olova apps without any build tools! Just create an HTML file
and start coding! Try adding more features to your counter:

- Add animations when the number changes
- Add a high score tracker
- Add different increment amounts
- Add keyboard controls

Remember: You can do all of this with just one HTML file! 🚀
