function List(props) {
  return (
    <ul>
      <h4>{props.title}</h4>

      <li>{props.item1}</li>
      <li>{props.item2}</li>
      <li>{props.item3}</li>
      <li>{props.item4}</li>
    </ul>
  );
}

export default List;
