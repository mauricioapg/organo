import './DropDownList.css'

const DropDownList = (props) => {

    const changeValue = (events) => {
        props.changeValue(events.target.value == '' ? 'Goleiro' : events.target.value)
    }

    return(
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select value={props.value} onChange={changeValue}>
                {props.items.map(item => {
                    return (<option key={item}>{item}</option>)
                })}
            </select>
        </div>
    )
}

export default DropDownList