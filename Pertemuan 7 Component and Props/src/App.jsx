import Card from "./Card";

function App() {
  function handleClick(nama) {
    alert(`hello ${nama}`);
  }
  return (
    <>
      <h1>Hello World</h1>
      <Card
        nama="Justin Bieber"
        gambar="https://media.gq.com/photos/56bcb218cdf2db6945d2ef93/master/pass/bieber-coverstory-square.jpg"
        deskripsi="Justin Drew Bieber is a Canadian singer. He was discovered by talent manager Scooter Braun and signed with RBMG Records in 2008."
        email="test@gmail.com"
        award={["Grammy Award", "American Music Award"]}
        onButtonClick={() => handleClick("Justin Bieber")}
      />
      <Card
        nama="Linkin Park"
        gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCyPAxMz20V0jMKjqy8vBzL4NthcRmBQSJoxRRJC2kGvJlizQSRBonVuSFgfQiYCAVXQCYuQ4q8nBLMMImMzN9ToHV2GKDS5kjxp-5blg&s=10"
        deskripsi="Linkin Park is an American rock band from Agoura Hills, California. The band was formed in 1996 by Mike Shinoda, Dave Farrell, Joe Hahn, Brad Delson, Rob Bourdon, and Mark Wakefield."
        email="asd@gmail.com"
        award={["Music Award", "Rock Award"]}
        onButtonClick={() => handleClick("Linkin Park")}
      />
    </>
  );
}

export default App;
