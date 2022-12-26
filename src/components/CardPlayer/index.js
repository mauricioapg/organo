import './CardPlayer.css'

const CardPlayer = ({ name, position, imageUrl, primaryColor}) => {
    return(
        <div className='card-player'>
            <div className='header' style={{ backgroundColor: primaryColor }}>
                <img src={imageUrl} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default CardPlayer