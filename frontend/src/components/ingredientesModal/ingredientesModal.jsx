import { useState } from "react";

export const IngredientesModal = (open, receitaId, onClose) => {
    const [ingrediente, setIngrediente] = useState(null);    
    
    const cadastrarIngrediente = () => {
        cadastrarIngrediente(receitaId);
    }

const handleChange = (e) => {
        const { nome } = e.target;
        setIngrediente((prevState) => ({
            ...prevState,
            nome
        }))
    }

    return (
        <div style={{backgroundColor:'white'}}>
            <form onSubmit={cadastrarIngrediente}>
                <input type="text" placeholder="Nome" value={ingrediente.nome} onChange={handleChange}/>
                <button type="submit" onClick={cadastrarIngrediente}>Salvar</button>
            </form>
            <button onClick={onClose}>Fechar</button>
        </div>
    )
}