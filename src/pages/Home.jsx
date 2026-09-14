import Header from '../components/Header';
import Menu from '../components/Menu';
import Hero from '../components/Hero';
import Servicos from '../components/Servicos';

function Home() {
    return (
        <main>
            <div className="flex-homu">
                
                <Menu />
                
                <Header /> 
            </div>

            <Hero />

            <Servicos />
        </main>
    )
}

export default Home