import './TextFieldForm.css'

const TextFieldForm = (props) => {

    const changeValue = (events) => {
        props.changeValue(events.target.value)
    }

    return(
        <div className='text-field-form'>
            <label>{props.label}</label>
            <input value={props.value} onChange={changeValue} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default TextFieldForm