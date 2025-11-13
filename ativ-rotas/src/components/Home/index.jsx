import './style.css' 
import logo from '../../assets/logo.png' 
import equipe from '../../assets/equipe.png' 
import { Link } from '../../assets/contablidade.webp' 
import equipe from '../../assets/equipe.png' 

export default function Home() { 
    return( 
        <div className='logo'> 
            <section className='logo'> 
                <h1>Contabilidade descomplicada para seu negócio</h1> 
                <p> 
                    Economize tempo e foque no que realmente importa. 
                    Nossa equipe de especialistas cuida de toda a parte contábil, 
                    garantindo conformidade e eficiência para sua empresa.
                </p> 

                <div> 
                    <link to ="/fale-conosco"> Fale com um especialista</link>
                </div>
            </section>
        </div>
    )
}