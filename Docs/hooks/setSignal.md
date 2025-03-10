# 🎯 setSignal - Your Magic Box of Values!

Hey there, young coder! 👋 Let's learn about something super cool called
`setSignal`!

## 🤔 What is setSignal?

Think of `setSignal` as a magical box that can hold anything you want - numbers,
words, or even a list of your favorite toys! The special thing about this box is
that it tells your webpage whenever you change what's inside it.

## 🎮 How to Use It

```jsx
import { setSignal } from "olova";

// Create a magic box with a number
const [count, setCount] = setSignal(0);

// Create a magic box with text
const [name, setName] = setSignal("Bobby");

// Create a magic box with a list
const [toys, setToys] = setSignal(["🎮", "🎨", "🎪"]);
```

## 🌟 Simple Examples

### 1. Number Counter

```jsx
const Counter = () => {
  const [count, setCount] = setSignal(0);

  return (
    <button onClick={() => setCount(count() + 1)}>
      Count: {() => count()}
    </button>
  );
};
```

### 2. Name Greeter

```jsx
const Greeter = () => {
  const [name, setName] = setSignal("Friend");

  return (
    <div>
      <input value={() => name()} onInput={(e) => setName(e.target.value)} />
      <p>Hello, {() => name()}! 👋</p>
    </div>
  );
};
```

### 3. Toggle Switch

```jsx
const Switch = () => {
  const [isOn, setIsOn] = setSignal(false);

  return (
    <button onClick={() => setIsOn(!isOn())}>
      {() => (isOn() ? "ON 🌟" : "OFF 💤")}
    </button>
  );
};
```

## 🎨 Cool Things You Can Do

1. **Store Numbers**: Count things, keep scores
2. **Store Text**: Names, messages, titles
3. **Store True/False**: Turn things on and off
4. **Store Lists**: Keep track of multiple things

## 🎯 Remember

- Use `()` to read what's in the box: `count()`
- Use the setter to change what's in the box: `setCount(5)`
- The webpage updates automatically when you change values
- You can store any type of value in your magic box

## 🎮 Try It Yourself!

Here's a simple emoji picker to try:

```jsx
const EmojiPicker = () => {
  const [emoji, setEmoji] = setSignal("😊");
  const options = ["😊", "🎮", "🌟", "🎨", "🚀"];

  return (
    <div>
      <h3>Current Mood: {() => emoji()}</h3>
      <div>
        {options.map((e) => (
          <button onClick={() => setEmoji(e)}>{e}</button>
        ))}
      </div>
    </div>
  );
};
```

## 🌈 Have Fun!

Now you know how to use `setSignal` to create magical boxes that can hold and
change values! Try making your own counters, toggles, and other fun things! 🚀
