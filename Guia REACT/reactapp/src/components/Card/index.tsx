import "./style.css"

export type CardProps ={
  name:string;
  time:string;
}

export function Card(props:CardProps) {
  return (

      <div className="card">
        <strong>{props.name}</strong>
        <small>{props.time}</small>
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
