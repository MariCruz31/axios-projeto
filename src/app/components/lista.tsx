
import axios from "axios"

interface Person{
name: string;
id: number;
}

export async function Lista() {
   
   
  
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character")

        return <ul>
            {response.data.results.map((person: Person) => (
                <li key = {person.id}>{person.name}</li>
            ))}

        </ul>
        
    } catch (error) {
        
        return <h1>Deu erro!</h1>
    }
    
   
}