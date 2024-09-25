import React from 'react';
import Navbar from './components/Navbar';

const menuItems = [
  { title: 'Accueil', link: '/' },
  { title: 'Parents et jeunes', link: '/Parents_et_jeunes' },
  { title: 'Entreprises et associations', link: '/Entreprises_et_associations' },
  { title: 'Institutions et enseignants', link: '/Institutions_et_enseignants' },
  { title: "Découvrez les Entretiens de l'Excellence", link: "/Découvrez_les_Entretiens_de_l'Excellence" }

];

function App() {
  return (
    <div className="App">
      <Navbar menuItems={menuItems} />
      {/* D'autres composants ou éléments ici */}
    </div>
  );
}

export default App;
