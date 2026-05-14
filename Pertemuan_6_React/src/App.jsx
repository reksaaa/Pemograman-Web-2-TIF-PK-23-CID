import { booksData } from "./book";

export default function App() {
  const name = "Dembaba";

  const age = 50;

  const today = new Date();

  const hours = today.getHours();

  const customStyles = {
    color: "",
  };

  let greeting;
  if (hours < 12) {
    greeting = "Selamat Pagi";
    customStyles.color = "red";
  } else if (hours < 18) {
    greeting = "Selamat Siang";
    customStyles.color = "orange";
  } else {
    greeting = "Selamat Malam";
    customStyles.color = "blue";
  }

  function show() {
    alert(`Nama saya ${name} dan umur saya ${age} tahun`);
  }

  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        <h1 className="heading">Hello World {name}</h1>
        <h1 style={customStyles}>{greeting}</h1>
      </div>

      <h2 className="heading-2">Ini page react pertama saya</h2>
      <h3>Umur saya {age} tahun</h3>
      {age > 50 ? <h1>Lansia</h1> : <h1>Masih Fresh</h1>}

      <h2>Buku favorite saya</h2>
      <ul>
        {booksData.map((book) => (
          <div key={book.title}>
            <img src={book.image} alt={book.title} width={150} height={200} />
            <li>
              <h3>
                {book.title} by {book.author}
              </h3>
            </li>
          </div>
        ))}
      </ul>
      <button onClick={show}>Show</button>
    </div>
  );
}
