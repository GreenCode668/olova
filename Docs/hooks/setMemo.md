# 🧮 setMemo - Your Smart Calculator Friend!

Hello, coding explorer! 👋 Let's learn about `setMemo`, your super-smart
calculator that remembers things!

## 🤔 What is setMemo?

Think of `setMemo` as a very clever calculator that only does math when it needs
to. It's like having a friend who remembers the answer to a math problem and
only recalculates when the numbers change!

## 🎮 How to Use It

```jsx
import { setSignal, setMemo } from "./core/core.js";

// Create some magic boxes with numbers
const [width, setWidth] = setSignal(5);
const [height, setHeight] = setSignal(4);

// Create a smart calculator that figures out the area
const area = setMemo(() => width() * height());
```

## 🌟 Fun Examples

### 1. Smart Shopping Cart

```jsx
const ShoppingCart = () => {
  const [items, setItems] = setSignal([
    { name: "Cookie", price: 2 },
    { name: "Milk", price: 3 },
  ]);

  // Smart calculator for total price
  const totalPrice = setMemo(() => {
    return items().reduce((sum, item) => sum + item.price, 0);
  });

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {() =>
          items().map((item) => (
            <li>
              {item.name}: ${item.price}
            </li>
          ))
        }
      </ul>
      <h3>Total: ${() => totalPrice()}</h3>
    </div>
  );
};
```

### 2. Name Combiner

```jsx
const NameCombiner = () => {
  const [firstName, setFirstName] = setSignal("Super");
  const [lastName, setLastName] = setSignal("Coder");

  // Smart calculator for full name
  const fullName = setMemo(() => {
    return `${firstName()} ${lastName()}`;
  });

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
      <h2>Your Hero Name: {() => fullName()}</h2>
    </div>
  );
};
```

## 🎨 Cool Things You Can Do

1. **Calculate Totals**: Add up numbers in a smart way
2. **Combine Information**: Put different pieces of information together
3. **Filter Lists**: Make new lists based on rules
4. **Transform Data**: Change information into a different format

## 🎯 Remember

- `setMemo` is like a smart calculator that remembers its answers
- It only recalculates when the things it's watching change
- It's perfect for calculations that you don't want to do over and over
- It helps make your app faster and smarter!

## 🎮 Try It Yourself!

Here's a fun game score calculator to try:

```jsx
const GameScoreBoard = () => {
  const [points, setPoints] = setSignal(0);
  const [multiplier, setMultiplier] = setSignal(1);

  // Smart calculator for final score
  const finalScore = setMemo(() => {
    return points() * multiplier();
  });

  // Smart calculator for rank
  const rank = setMemo(() => {
    const score = finalScore();
    if (score >= 1000) return "🌟 SUPER STAR";
    if (score >= 500) return "⭐ STAR";
    if (score >= 100) return "😊 ROOKIE";
    return "🌱 BEGINNER";
  });

  return (
    <div>
      <h1>Game Score: {() => finalScore()}</h1>
      <h2>Rank: {() => rank()}</h2>
      <button onClick={() => setPoints(points() + 10)}>
        Get Points (+10) 🎮
      </button>
      <button onClick={() => setMultiplier(multiplier() + 1)}>
        Increase Multiplier 🚀
      </button>
    </div>
  );
};
```

## 🌈 Have Fun!

Now you know how to use `setMemo` to make smart calculations in your app! Try
combining it with your other magical tools to make something awesome! 🚀
