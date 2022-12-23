function GifItem({ url, title }) {
  return (
    <>
      <div className="card">
        <img src={url} alt={title} />
      </div>
    </>
  );
}

export default GifItem;
