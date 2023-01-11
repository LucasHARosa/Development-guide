import "./style.css"

export function Card({name, time}) {
  return (

      <div className="card">
        <strong>{name}</strong>
        <small>{time}</small>
      </div>
      
    
  );
}

/*
Uma alternativa é escrever da seguinte forma:


export function Card(props) {
  return (

      <div className="card">
        <strong>{props.name}</strong>
        <small>{props.time}</small>
      </div>
      
    
  );
}
*/
