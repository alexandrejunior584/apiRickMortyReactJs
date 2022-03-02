import { useState, useEffect } from 'react';
import { Api } from './api';
import { PersonItem } from './components/PersonItem';
import { Person } from './types/Person';


function App() {
  const [dados, setDados] = useState<Person[]>([]);

  useEffect(()=>{
    loadPerson();
  },[])

  const loadPerson = async () => {
    let json = await Api.getAllPerson();
    setDados(json);
  }

  return (
    <div className="bg-[url('src/assets/img/montagem.jpg')] pt-10 pb-10">
      <div className="grid grid-cols-3 gap-6 w-4/5 m-auto">
        {dados.map((item,index)=>(
          <PersonItem dados={item} />
        ))}
      </div>
    </div>
  )
}

export default App;
