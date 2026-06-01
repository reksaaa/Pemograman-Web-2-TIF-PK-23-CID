import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <h1>App</h1>
      <p>Count : {count}</p>
      <button onClick={increment}>Tambah</button>
      <button onClick={decrement}>Kurang</button>
      <button onClick={reset}>Reset</button>

      <div>
        <form action="">
          <label htmlFor="nama">Nama</label>
          <input
            id="nama"
            type="text"
            placeholder="Masukkan Nama"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </form>
        <p>{name}</p>
      </div>
    </>
  );
}
