function List({ list, classname, title }) {
  return (
    <ul className={classname}>
      <h4>{title}</h4>
      {list.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </ul>
  );
}

export default List;
