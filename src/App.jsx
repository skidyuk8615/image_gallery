export default function App() {

  const pic1 = {
    src: "images/pic1.jpg",
    alt: "Closeup of a human eye"
  };

  const pic2 = {
    src: "images/pic2.jpg",
    alt: "Rock that looks like a wave"
  };

  const pic3 = {
    src: "images/pic3.jpg",
    alt: "Purple and white pansies"
  };

  const pic4 = {
    src: "images/pic4.jpg",
    alt: "Section of wall from a pharoah's tomb"
  };

  const pic5 = {
    src: "images/pic5.jpg",
    alt: "	Large moth on a leaf"
  };

  const iamges = [pic1, pic2, pic3, pic4, pic5];

  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src="images/pic1.jpg"
          alt="Closeup of a human eye"
        />
        <div className="overlay"></div>
        <button className="dark">Darken</button>
      </div>
      <div className="thumb-bar"></div>
    </>
  );
}