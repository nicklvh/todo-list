interface ListGroupProps {
  items: string[];
  onClick: (item: string) => void;
}

function ListGroup({ items, onClick }: ListGroupProps) {
  return (
    <ul className="list-group list-group-numbered">
      {items.map((item, index) => {
        return (
          <>
            <li key={index} className="list-group-item">
              {item}
              <button className="btn btn-primary" type="button" onClick={() => onClick(item)}>Mark As Done</button>
            </li>
          </>
        )
      })}
    </ul>
  )
}

export default ListGroup;