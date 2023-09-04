import { h } from "preact";
import { useState } from "preact/hooks";

export default function Greetings({ messages }) {
  const randomMessage = () => {
    return messages[(Math.floor(Math.random() * messages.length))];
  };

  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div>
      <h3>{greeting}! Gracias por su visita</h3>
      <button onClick={() => setGreeting(randomMessage())}>Nuevo Saludo</button>
    </div>
  );
}
