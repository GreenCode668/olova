# 🎨 Components - Your Magic Building Blocks!

Hey there, creative builder! 👋 Let's learn about Components, your magical
LEGO-like blocks that help you build awesome web pages!

## 🤔 What are Components?

Think of Components as magical LEGO blocks that you can create and reuse to
build your webpage. Each component is like a special block that can do its own
cool things! Just like how you can use the same LEGO piece many times to build
different things, you can reuse components to build different parts of your
webpage.

## 🎮 How to Use Them

```jsx
// Create your first component
const MyButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: "purple",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {text}
    </button>
  );
};

// Use your component many times!
const App = () => {
  return (
    <div>
      <MyButton text="Click Me!" onClick={() => alert("Hello!")} />
      <MyButton text="Magic Button" onClick={() => alert("✨ Magic!")} />
    </div>
  );
};
```

## 🌟 Fun Examples

### 1. Pet Card Component

```jsx
const PetCard = ({ name, type, age, image }) => {
  const [isHappy, setIsHappy] = setSignal(false);

  return (
    <div
      style={{
        border: "2px solid pink",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        textAlign: "center",
      }}
    >
      <img src={image} style={{ width: "100px", height: "100px" }} />
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Age: {age} years old</p>
      <button onClick={() => setIsHappy(!isHappy())}>
        Pat {name}! {() => (isHappy() ? "😊" : "😐")}
      </button>
    </div>
  );
};

// Using the PetCard component
const PetGallery = () => {
  return (
    <div>
      <h1>My Pet Friends! 🐾</h1>
      <div style={{ display: "flex" }}>
        <PetCard name="Fluffy" type="Cat" age={3} image="cat.jpg" />
        <PetCard name="Buddy" type="Dog" age={5} image="dog.jpg" />
      </div>
    </div>
  );
};
```

### 2. Magic Counter Component

```jsx
const MagicCounter = ({ startNumber, color }) => {
  const [count, setCount] = setSignal(startNumber);
  const [sparkles, setSparkles] = setSignal(false);

  const addNumber = () => {
    setCount(count() + 1);
    setSparkles(true);
    setTimeout(() => setSparkles(false), 500);
  };

  return (
    <div
      style={{
        background: color,
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "white",
          transform: () => (sparkles() ? "scale(1.2)" : "scale(1)"),
          transition: "transform 0.2s",
        }}
      >
        {() => count()} {() => (sparkles() ? "✨" : "")}
      </h2>
      <button onClick={addNumber}>Add One! 🎯</button>
    </div>
  );
};

// Using the MagicCounter component
const CounterGame = () => {
  return (
    <div>
      <h1>Magic Counting Game!</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <MagicCounter startNumber={0} color="purple" />
        <MagicCounter startNumber={10} color="blue" />
        <MagicCounter startNumber={100} color="green" />
      </div>
    </div>
  );
};
```

## 🎨 Cool Things Components Can Do

1. **Be Reusable**: Use the same component many times with different settings
2. **Have Props**: Get special instructions (we call them props) from their
   parent
3. **Have State**: Remember and change their own information
4. **Be Nested**: Put components inside other components
5. **Be Styled**: Have their own special look and design

## 🎯 Remember

- Components start with a Capital Letter (like `MyButton`)
- They're like recipes - you define them once and can use them many times
- They can receive props (like settings) from their parent
- They can have their own signals (state) to remember things
- They return JSX (the special HTML-like code we write)

## 🎮 Try It Yourself!

Let's make a fun emoji card game component!

```jsx
const EmojiCard = ({ emoji, isFlipped, onFlip }) => {
  return (
    <div
      onClick={onFlip}
      style={{
        width: "100px",
        height: "100px",
        background: () => (isFlipped() ? "white" : "purple"),
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "40px",
        cursor: "pointer",
        transition: "transform 0.3s",
        transform: () => (isFlipped() ? "rotateY(180deg)" : "rotateY(0deg)"),
      }}
    >
      {() => (isFlipped() ? emoji : "❓")}
    </div>
  );
};

const EmojiMemoryGame = () => {
  const emojis = ["🐶", "🐱", "🐰", "🐼", "🦊", "🐯"];
  const [flippedCards, setFlippedCards] = setSignal([]);

  const toggleCard = (index) => {
    if (flippedCards().includes(index)) {
      setFlippedCards(flippedCards().filter((i) => i !== index));
    } else {
      setFlippedCards([...flippedCards(), index]);
    }
  };

  return (
    <div>
      <h1>Emoji Memory Game! 🎮</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          padding: "20px",
        }}
      >
        {emojis.map((emoji, index) => (
          <EmojiCard
            emoji={emoji}
            isFlipped={() => flippedCards().includes(index)}
            onFlip={() => toggleCard(index)}
          />
        ))}
      </div>
    </div>
  );
};
```

## 🌈 Have Fun!

Now you know how to create and use Components, your magical building blocks! Try
making your own components and building something amazing with them! Remember,
just like with LEGO, the only limit is your imagination! 🚀
