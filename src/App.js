import { useState } from 'react';
import Banner from './components/Banner'
import Club from './components/Club';
import Footer from './components/Footer';
import FormMain from './components/FormMain'

function App() {

  const clubs = [
    {
      name: 'Palmeiras',
      secondColor: '#D9F7E9',
      primaryColor: '#57C278'
    },
    {
      name: 'Corinthians',
      secondColor: '#DCDCDC',
      primaryColor: '#1C1C1C'
    },
    {
      name: 'São Paulo',
      secondColor: '#FFC0CB',
      primaryColor: '#FF0000'
    },
    {
      name: 'Santos',
      secondColor: '#C0C0C0',
      primaryColor: '#363636'
    }
]

  const [players, setPlayers] = useState([])

  const savePlayer = (player) => {
    console.log(player)
    setPlayers([...players, player])
  }

  return (
    <div className="App">
      <Banner />
      <FormMain 
        clubs={clubs.map(club => club.name)} 
        registerPlayer={player => savePlayer(player)} 
      />
      {clubs.map(club => 
        <Club 
          key={club.name} 
          name={club.name} 
          primaryColor={club.primaryColor} 
          secondColor={club.secondColor} 
          players={players.filter(player => player.club === club.name)}
        />
      )}
      <Footer imageFooter='/images/footer.png'/>
    </div>
  );
}

export default App;
