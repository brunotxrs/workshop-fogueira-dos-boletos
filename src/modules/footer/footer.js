import './footer.css';

import imgProfile from '../../assets/images/profile.sarom-no-background.png';


function Footer(){



    return (
        <div id='footer-container'>
            
            <div className='description'>
                <h2>Sarom Teixeira</h2>
                <p>
                    Sua única mentora a partir de hoje
                    Hoje tudo o que você precisa saber é que o meu compromisso com os teus resultados é o meu único objetivo.
                    Se você chegou até aqui, sabe o quanto prezo pela praticidade e não enrolação.
                    Hoje, você tomou uma decisão.
                    Queres saber de mim? Vá até o post fixado no Instagram.
                    Quer resultado? Conclui a pesquisa e entra no grupo.
                    Vamos dominar o mundo
                </p>
            </div>

            

            <span><img src={imgProfile} /></span>
            

        </div>
    )
}


export default Footer;