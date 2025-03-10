# 🎪 Lifecycle - Your Component's Life Story!

Hey there, curious coder! 👋 Let's learn about `onMount` and `onUnmount`, the
magical helpers that tell us when our components come to life and when they say
goodbye!

## 🤔 What are Lifecycle Hooks?

Think of your components like magical creatures in a video game:

- `onMount` is like when your character spawns into the game - it's the "Hello,
  I'm here!" moment
- `onUnmount` is like when your character leaves the game - it's the "Goodbye,
  see you later!" moment

## 🎮 How to Use Them

```jsx
import { onMount, onUnmount } from "./core/core.js";

const MagicalCreature = () => {
  onMount(() => {
    console.log("🎉 Yay! I'm here!");
  });

  onUnmount(() => {
    console.log("👋 Bye bye! See you later!");
  });

  return <div>I'm a magical creature!</div>;
};
```

## 🌟 Fun Examples

### 1. Magic Timer

```jsx
const MagicTimer = () => {
  const [time, setTime] = setSignal(0);

  onMount(() => {
    console.log("⏰ Timer is starting!");
    // Create a timer that counts up every second
    const timer = setInterval(() => {
      setTime(time() + 1);
    }, 1000);

    // Clean up when we're done
    onUnmount(() => {
      console.log("⏰ Timer is stopping!");
      clearInterval(timer);
    });
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Magic Timer: {() => time()} seconds</h2>
      <p>{() => (time() % 2 === 0 ? "Tick! ⭐" : "Tock! 🌟")}</p>
    </div>
  );
};
```

### 2. Magical Pet Friend

```jsx
const MagicalPet = () => {
  const [mood, setMood] = setSignal("happy");
  const [energy, setEnergy] = setSignal(100);

  onMount(() => {
    console.log("🐾 Your pet has appeared!");

    // Pet gets tired over time
    const energyTimer = setInterval(() => {
      setEnergy((current) => {
        const newEnergy = current - 1;
        if (newEnergy < 30) {
          setMood("sleepy");
        }
        return newEnergy;
      });
    }, 1000);

    onUnmount(() => {
      console.log("💤 Your pet is going to sleep!");
      clearInterval(energyTimer);
    });
  });

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid pink",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>My Magical Pet</h2>
      <div style={{ fontSize: "40px" }}>
        {() => (mood() === "happy" ? "😊" : "😴")}
      </div>
      <div>
        Energy: {() => energy()}%
        <div
          style={{
            width: "100%",
            height: "10px",
            background: "#eee",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              width: () => `${energy()}%`,
              height: "100%",
              background: () => (energy() > 30 ? "green" : "red"),
              borderRadius: "5px",
              transition: "all 0.3s",
            }}
          ></div>
        </div>
      </div>
      <button
        onClick={() => {
          setEnergy(100);
          setMood("happy");
        }}
      >
        Feed Pet! 🍎
      </button>
    </div>
  );
};
```

### 3. Treasure Hunter Game

```jsx
const TreasureGame = () => {
  const [score, setScore] = setSignal(0);
  const [treasures, setTreasures] = setSignal([]);

  onMount(() => {
    console.log("🎮 Game Starting!");

    // Create new treasures every few seconds
    const gameLoop = setInterval(() => {
      const newTreasure = {
        id: Date.now(),
        x: Math.random() * 300,
        y: Math.random() * 300,
        value: Math.floor(Math.random() * 10) + 1,
      };
      setTreasures([...treasures(), newTreasure]);
    }, 2000);

    // Save high score when leaving
    onUnmount(() => {
      console.log("🎮 Game Over! Final Score:", score());
      localStorage.setItem(
        "highScore",
        Math.max(Number(localStorage.getItem("highScore") || 0), score())
      );
      clearInterval(gameLoop);
    });
  });

  const collectTreasure = (id, value) => {
    setScore(score() + value);
    setTreasures(treasures().filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>Treasure Hunter! 💎</h1>
      <h2>Score: {() => score()}</h2>
      <div
        style={{
          position: "relative",
          width: "400px",
          height: "400px",
          border: "2px solid gold",
          background: "#f0f0f0",
        }}
      >
        {() =>
          treasures().map((treasure) => (
            <div
              onClick={() => collectTreasure(treasure.id, treasure.value)}
              style={{
                position: "absolute",
                left: treasure.x + "px",
                top: treasure.y + "px",
                cursor: "pointer",
                fontSize: "30px",
              }}
            >
              💎
            </div>
          ))
        }
      </div>
    </div>
  );
};
```

## 🎨 Cool Things You Can Do

1. **Start Things**: Begin animations, timers, or games when your component
   appears
2. **Clean Up**: Stop timers and clean up when your component goes away
3. **Load Data**: Get information when your component first shows up
4. **Save Things**: Save important stuff before your component disappears
5. **Make Connections**: Connect to other parts of your app or game

## 🎯 Remember

- `onMount` runs when your component first appears
- `onUnmount` runs just before your component disappears
- Always clean up your timers and connections in `onUnmount`
- You can use them together to make components that manage themselves
- They're perfect for games and animations!

## 🎮 Try It Yourself!

Here's a fun challenge: Try making a magical garden where flowers grow and fade
away!

```jsx
const MagicFlower = ({ onWilt }) => {
  const [size, setSize] = setSignal(0);
  const [isHappy, setIsHappy] = setSignal(true);

  onMount(() => {
    // Flower grows when it appears
    const growing = setInterval(() => {
      setSize((s) => Math.min(s + 1, 50));
    }, 100);

    // Flower gets sad after some time
    const wilting = setTimeout(() => {
      setIsHappy(false);
      onWilt();
    }, 5000);

    onUnmount(() => {
      clearInterval(growing);
      clearTimeout(wilting);
    });
  });

  return (
    <div
      style={{
        position: "absolute",
        left: Math.random() * 300 + "px",
        top: Math.random() * 300 + "px",
        fontSize: () => size() + "px",
        transition: "all 0.3s",
      }}
    >
      {() => (isHappy() ? "🌸" : "🥀")}
    </div>
  );
};

const MagicGarden = () => {
  const [flowers, setFlowers] = setSignal([]);

  const addFlower = () => {
    const id = Date.now();
    setFlowers([...flowers(), id]);
  };

  const removeFlower = (id) => {
    setFlowers(flowers().filter((f) => f !== id));
  };

  return (
    <div>
      <h1>Magic Garden! 🌸</h1>
      <button onClick={addFlower}>Plant New Flower! 🌱</button>
      <div
        style={{
          position: "relative",
          width: "400px",
          height: "400px",
          border: "2px solid green",
          background: "#e8f5e9",
          margin: "20px",
        }}
      >
        {() =>
          flowers().map((id) => (
            <MagicFlower key={id} onWilt={() => removeFlower(id)} />
          ))
        }
      </div>
    </div>
  );
};
```

## 🌈 Have Fun!

Now you know how to use `onMount` and `onUnmount` to make your components come
alive! Try using them to create amazing animations, games, and magical
experiences! 🚀
