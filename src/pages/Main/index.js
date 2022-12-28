import Nav from "../../components/Nav";
import Home from '../../components/Home'
import Sobre from '../../components/Sobre'
import Cardapio from '../../components/Cardapio';
import Agenda from '../../components/Agenda';
import Ambientes from '../../components/Ambientes';
import Contato from '../../components/Contato';


function Main() {
 return (
   <div>
      <Nav />
      <Home/>
      <Sobre/>
      <Cardapio/>
      <Agenda/>
      <Ambientes/>
      <Contato/>
   </div>
 );
}

export default Main;