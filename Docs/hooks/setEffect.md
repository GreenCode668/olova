# 🔄 setEffect - Your Magic Helper That Watches Things!

Hey there, future programmer! 👋 Let's learn about `setEffect`, your magical
helper that watches for changes!

## 🤔 What is setEffect?

Think of `setEffect` as a friendly robot that watches your magic boxes (signals)
and does something when they change. It's like having a helper who says "Hey,
something changed! Let me help!"

## 🎮 How to Use It

```jsx
import { setSignal, setEffect } from "olova";

// Create a magic box
const [count, setCount] = setSignal(0);

// Create a helper to watch it
setEffect(() => {
  console.log("The count changed to:", count());
});
```

## 🌟 Simple Examples

### 1. Message Logger

```jsx
const Logger = () => {
  const [message, setMessage] = setSignal("Hello");

  setEffect(() => {
    console.log("New message:", message());
  });

  return (
    <input
      value={() => message()}
      onInput={(e) => setMessage(e.target.value)}
    />
  );
};
```

### 2. Title Updater

```jsx
const TitleUpdater = () => {
  const [name, setName] = setSignal("Friend");

  setEffect(() => {
    document.title = `Hello, ${name()}!`;
  });

  return (
    <input value={() => name()} onInput={(e) => setName(e.target.value)} />
  );
};
```

### 3. Simple Timer

```jsx
const Timer = () => {
  const [time, setTime] = setSignal(0);

  setEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => clearInterval(timer);
  });

  return <div>Time: {() => time()} seconds</div>;
};
```

## 🎨 Cool Things You Can Do

1. **Watch Changes**: Know when values change
2. **Clean Up**: Stop things when needed
3. **Update Things**: Change other things automatically
4. **Load Data**: Get information when needed

## 🎯 Remember

- `setEffect` runs when your component first appears
- It runs again when the values it watches change
- You can clean up by returning a function
- It's perfect for timers and automatic updates

## 🎮 Try It Yourself!

Here's a simple color theme switcher:

```jsx
const ThemeSwitcher = () => {
  const [isDark, setIsDark] = setSignal(false);

  setEffect(() => {
    document.body.style.background = isDark() ? "#333" : "#fff";
    document.body.style.color = isDark() ? "#fff" : "#333";
  });

  return (
    <button onClick={() => setIsDark(!isDark())}>
      Switch to {() => (isDark() ? "Light" : "Dark")} Mode
    </button>
  );
};
```

## 🌈 Have Fun!

Now you know how to use `setEffect` to watch for changes and make your app react
automatically! Try creating your own watchers and automatic updates! 🚀
