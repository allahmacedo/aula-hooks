import {useState} from 'react';
 
function SmartCounter(){
    const [quantity, upQuantity] = useState(1)
    // propriedade - método                 valor inicial
    // useState retorna um vetor  
    // variável stateful
    // função amarrada a essa variável que atualiza seu valor

    return(
        <>
            <h1>{quantity}</h1>
            <button onClick={() => upQuantity(quantity + 1) }>Aumentar</button>
        </>
    )
}

export default SmartCounter;