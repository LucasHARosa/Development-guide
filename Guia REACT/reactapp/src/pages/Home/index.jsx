import React, {useState , useEffect} from 'react';
import "./style.css"

import { Card } from '../../components/Card';

function Home() {
  // função auxiliar
  // function handleNameChance(name) {
  //   console.log(name)
  // }

  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user,setUser] = useState({name:'',avatar:''});

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }

    setStudents(prevState => [...prevState, newStudent]);
  }

  useEffect(()=>{
    //o useEffect é executado automaticamente assim que os componentes forem renderizados ou quando 
    fetch('https://api.github.com/users/lucasharosa')
    .then(response => response.json())
    .then((data) => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    });
  },[]);



  return (
    <>
      <div className="container">
        <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="foto de perfil" />
        </div>
        </header>
        
        <input 
          type="text" 
          placeholder="Digite o nome..." 
          onChange={e => setStudentName(e.target.value)}// função que pega mudanças no input
        />
        <button type="button" onClick={handleAddStudent}>Adicionar</button>
        
        {
          students.map(student => 
            <Card 
            key={student.time}
            name={student.name} 
            time={student.time} />)
        }
        
        
      </div>
      
    </>
  );
}

export default Home;