import "./CatCard.css";

export function CatCard({ data }) {
  return (
    <div className="cat-container">
      <img className="cat-image" src={data.image} alt="" />
      <div className="cat-content">
        <h3 className="cat-name">{data.name}</h3>
        <h6 className="cat-origin">Origin: {data.origin}</h6>
        <p className="cat-description">{data.description}</p>
      </div>
    </div>
  );
}
