import {useState} from 'preact/hooks';

export default function Greeting({messages}){

    const randomMessage = () => messages[Math.floor((Math.floor() * messages.length))];

    const [greeting, setGreating] = useState(messages[0]);

    return (
        <div>
           <h3>{greeting} ¡Gracias por tu visita!</h3>
           <button onClick={() => setGreating(randomMessage())}>
           Nuevo saludo 
           </button> 
        </div>
    );
}
