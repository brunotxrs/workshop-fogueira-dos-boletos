import './main.css';
import LessonItem from './LessonItem';

function Main(){

    // Dados das aulas
    const aulasData = [
        {
            numero: 1,
            titulo: 'É por isso que fiado é primeira “solução” que você pensa',
            info: 'Saia do ciclo de quem perde dinheiro e comece a transbordar'
        },
        {
            numero: 2,
            titulo: 'O dinheiro que você entrega na mão do cliente pra ele te pagar depois.',
            info: 'Pare de distribuir seu dinheiro'
        },
        {
            numero: 3,
            titulo: 'A âncora que você tem medo de largar',
            info: 'Descubra o que está sugando seu tempo e seu dinheiro'
        },
        {
            numero: 4,
            titulo: 'Faça dinheiro com as ferramenta que você já tem',
            info: 'Pare de buscar longe o que está na sua frente '
        },
        {
            numero: 5,
            titulo: 'Transforme seu instagram em uma máquina de vendas',
            info: 'Sai das cinzas das fotos de catálogo e assuma sua posição de empresária'
        },
    ];

    return (
        <div className='container'>
            <ol>
                {aulasData.map((aula) => (
                    <LessonItem
                        key={aula.numero} // Chave única para cada item na lista
                        aulaNumero={aula.numero}
                        tituloAula={aula.titulo}
                        infoTexto={aula.info}
                    />
                ))}
            </ol>

            <p className='step_info'>Clique no botão, conclua o primeiro passo para garantir a sua entrada no Grupo.</p>

            <p className='step_info'>1° Primeiro passo!</p>
            <button className='btn'>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSfcI2vIOiZvf1lT1Vc40qtsEqF67yK4upKcxZg1Wb2ZBKXYeQ/viewform?usp=header' target='_blank'>Cadastro</a>
            </button>

            <p className='step_info'>Entre no grupo do WhatsApp!</p>
            <button className='btn'>
                <a href='https://chat.whatsapp.com/FX3J1BXEho7HlMcyMwkoJa?mode=ac_t' target='_blank'>Grupo WhatsApp</a>
            </button>
        </div>
    );
}

export default Main;