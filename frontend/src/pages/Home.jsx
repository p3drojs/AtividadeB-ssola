import { useEffect, useState } from "react";
import { enviarReceita } from "../service/api";
import { IngredientesModal } from "../components/ingredientesModal/ingredientesModal";

export const Home = () => {
    const [receita, setReceita] = useState(null);
    const [ingredientesModal, setIngredientesModal] = useState(false);

    useEffect(() => {
        // const data = pegarReceitas();
        // setReceita(data);
    },[])

    const submit = (e) => {
        e.preventDefault();
        enviarReceita(receita);
    }

    const handleOpeningredientesModal = () => {
        setIngredientesModal(true);
    }

    const handleCloseingredientesModal = () => {
        setIngredientesModal(false);
    }


    const handleChange = (e) => {
        const { tempoPreparo, custoAproximado, nome} = e.target;
        setReceita((prevState) => ({
            ...prevState,
            tempoPreparo,
            custoAproximado,
            nome
        }))
    }

    return (
        <div style={{
            backgroundColor:'white', 
            borderRadius:'5px', 
            display:'flex',
            verticalAlign:'center',
            justifyContent:'center',
            alignItems: 'center' 
        }}>
            <div style={{
                backgroundColor:'white', 
                borderRadius: '10px', 
                height:'300px',
                width: '200px'
            }}>
                <form onSubmit={submit}>
                    <input type="text" placeholder="Nome" value={receita.nome} onChange={handleChange}/>
                    <input type="number" value={receita.tempoPreparo} placeholder="Tempo de preparo" onChange={handleChange}/>
                    <input type="number" value={receita.custoAproximado} placeholder="Custo aproximado" onChange={handleChange}/>                                        
                    <button onClick={handleOpeningredientesModal}> Adicionar ingrediente </button>
                    <button type="submit">Salvar</button>
                </form>
            </div>
        <IngredientesModal 
            onClose={handleCloseingredientesModal}
            open={ingredientesModal}
            receitaId={receita}
        />           
        </div>     
    )
};