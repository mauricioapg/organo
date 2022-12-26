import { useState } from "react"
import Button from "../Button"
import DropDownList from "../DropDownList"
import TextFieldForm from "../TextFieldForm"
import './FormMain.css'

const FormMain = (props) => {

    const positions = [
        'Goleiro',
        'Zagueiro',
        'Lateral-direito',
        'Lateral-esquerdo',
        'Meio-campo',
        'Atacante'
    ]

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [club, setClub] = useState('')

    const clearFields = () => {
        setName('')
        setPosition([0])
        setImageUrl('')
        setClub([0])
    }

    const saveData = (events) => {
        events.preventDefault()
        try{
            props.registerPlayer({
                name,
                position,
                imageUrl,
                club
            })
            clearFields()
        }
        catch(e){
            console.log(`ERRO: ${e}`)
        }
    }

    return (
        <section className="form-main">
            <form onSubmit={saveData}>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <TextFieldForm
                    required={true}
                    label='Nome'
                    placeholder='Digite o nome'
                    value={name}
                    changeValue={value => setName(value)} />
                <DropDownList
                    label='Posição'
                    items={positions}
                    value={position}
                    changeValue={value => setPosition(value)} />
                <TextFieldForm
                    required={true}
                    label='Imagem'
                    placeholder='Digite o endereço da imagem'
                    value={imageUrl}
                    changeValue={value => setImageUrl(value)} />
                <DropDownList
                    label='Clube'
                    items={props.clubs}
                    value={club}
                    changeValue={value => setClub(value)} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default FormMain