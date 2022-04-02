function Image({ path, descripition, func }) {
  return (
    <figure>
      <img src={path} alt={descripition} onClick={() => func} />
    </figure>
  );
}

export default Image;
