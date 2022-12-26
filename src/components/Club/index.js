import CardPlayer from '../CardPlayer'
import './Club.css'

const Club = (props) => {
    return(
        props.players.length > 0 ? <section className='club' style={{ backgroundColor: props.secondColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='players'>
                {props.players.map(player => 
                <CardPlayer 
                    key={player.name}
                    name= {player.name}
                    position={player.position}
                    imageUrl={player.imageUrl}
                    primaryColor={[props.primaryColor]} 
                />)}
            </div>
        </section> : <span></span>
    )
}

export default Club