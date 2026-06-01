export default function Card(props) {
  return (
    <>
      <div className="border">
        <h2>{props.nama}</h2>
        <img src={props.gambar} width="200" height="200" alt="" />
        <p>{props.deskripsi}</p>
        <h3>{props.email}</h3>
        <h4>Award :</h4>
        <ol>
          {props.award.map((award, index) => (
            <li key={index}>{award}</li>
          ))}
        </ol>
        <button onClick={props.onButtonClick}>Click</button>
      </div>
    </>
  );
}
