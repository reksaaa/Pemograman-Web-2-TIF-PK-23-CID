import { useState } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);
  //   const [cek, setCek] = useState("Genap");

  //   useEffect(() => {
  //     setCek(count % 2 === 0 ? "Genap" : "Ganjil");
  //   }, [count]);
  return (
    <>
      <h1>Count : {count}</h1>
      {/* <h2>Cek ganjil genap : {cek}</h2> */}
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={() => setCount(count - 1)}>Kurang</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
