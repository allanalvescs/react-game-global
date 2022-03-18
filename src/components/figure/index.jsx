function Image(props) {
  return (
    <figure>
      <img src={props.path} alt={props.descripition}/>
    </figure>
  );
}

export default Image;
