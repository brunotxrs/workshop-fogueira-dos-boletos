import './footer.css';

import imgProfile from '../../assets/images/profile.sarom-no-background.png';


function Footer(){



    return (
        <div id='footer-container'>
            
            <div className='description'>
                <h2>Sarom Teixeira</h2>
                <p>
                    Sua única mentora a partir de hoje.<br/>
                    Tudo o que você precisa saber é que o meu compromisso com os seus resultados é o meu único objetivo.<br/>
                    Se chegou até aqui, sabe o quanto prezo pela praticidade e não enrolação.<br/>
                    Hoje, você tomou uma decisão.<br/>
                    Quer saber de mim? Vá até o post fixado no Instagram.<br/>
                    Quer resultado?<br/>
                    Conclui a pesquisa e entra no grupo.<br/>
                    Vamos dominar o mundo!
                </p>
            </div>

            

            <span><img src={imgProfile} /></span>
            

        </div>
    )
}


export default Footer;