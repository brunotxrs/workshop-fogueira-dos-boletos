# 🚀 Landing Page: Workshop Fogueira dos Boletos
Visão Geral do Projeto
Este projeto consiste em uma Landing Page responsiva e dinâmica, desenvolvida para promover o "Workshop Fogueira dos Boletos" da Sarom Teixeira. O objetivo principal é atrair participantes para as aulas de consultoria, detalhando o conteúdo do workshop e direcionando os usuários para o cadastro e grupo do WhatsApp.

A página foi construída com React, garantindo uma interface de usuário moderna e interativa, com foco em uma experiência fluida tanto em dispositivos móveis quanto em desktops.

## ✨ Funcionalidades Principais

**Design Responsivo:** O layout se adapta perfeitamente a diferentes tamanhos de tela, proporcionando uma ótima experiência em celulares, tablets e computadores.

**Seção de Destaque (Header):** Apresenta o título do workshop com um background impactante (GIF de fogo) para capturar a atenção imediata do visitante.

**Lista de Aulas Interativas:** Exibe o conteúdo programático do workshop em um formato de lista. Cada aula possui um botão de "toggle" que revela ou esconde uma breve descrição, melhorando a navegabilidade e a experiência do usuário.

**Botões de Ação:** Botões claros para "Cadastro" e "Grupo WhatsApp", com animação sutil para chamar a atenção do usuário.

**Seção "Sobre a Mentora":** Uma área dedicada à Sarom Teixeira, apresentando sua expertise e compromisso com os resultados dos alunos, acompanhada de uma imagem de perfil.

**Componentização:** Utiliza a arquitetura de componentes do React para um código modular, reutilizável e de fácil manutenção (ex: ``LessonItem`` para as aulas).

**Estilização:** Utiliza CSS puro, com variáveis para cores e fontes, facilitando a consistência visual e futuras modificações.

## 🛠️ Tecnologias Utilizadas

**React**: Biblioteca JavaScript para construção da interface de usuário.

**HTML5:** Estrutura semântica do conteúdo.

**CSS3:** Estilização e responsividade da aplicação, incluindo animações com ``@keyframes``.

**Font Awesome:** Para ícones visuais (como ``faPlus`` e ``faMinus``).


📁 Estrutura de Pastas
A estrutura do projeto segue as convenções de um aplicativo React padrão (ex: Create React App):

`````
📦
├── public/
│   ├── index.html              # Arquivo HTML principal
│   └── favicon/                # favicon.ico
│   └── others.../      
├── src/
│   ├── assets/
│   │   └── images.../          # Images para o projeto
│   ├── modules                 # Componentes
│   ├── presentation/           # Componente do cabeçalho (Header)
│   │   └── presentation.js     # Componente do cabeçalho (Header)
│   │   └── presentation.css    # Estilos do cabeçalho
│   ├── main/                   # Componente principal do conteúdo (aulas e botões)
│   │   └── main.js             # Componente principal do conteúdo (aulas e botões)
│   │   └── main.css            # Estilos do conteúdo principal
│   │   └── LessonItem.js       # Componente reutilizável para cada item de aula
│   ├── footer/                 # Componente do rodapé
│   │   └── footer.js           # Componente do rodapé
│   │   └── footer.css          # Estilos do rodapé
│   ├── App.js                  # Componente principal que orquestra os demais
│   ├── index.js                # Ponto de entrada da aplicação
│   └── ...                     # Outros arquivos
├── package.json                # Dependências do projeto e scripts
├── .gitignore                  # .gitignore
├── License MIT                 # License MIT
└── README.md                   # README
`````

## 🌐 Acesso ao Projeto

Você pode acessar e explorar o projeto **Workshop Fogueira dos Boletos** diretamente no seu navegador através do seguinte link:

[**Workshop Fogueira dos Boletos**]()


## 📝 Como Atualizar o Conteúdo (Para o Cliente)

A Landing Page foi desenvolvida para ser relativamente fácil de atualizar em termos de conteúdo:

**Textos das Aulas:** Os títulos e descrições das aulas podem ser modificados no array ``aulasData`` dentro do arquivo ``src/main.js``.

**Links dos Botões:** Os links de "Cadastro" e "Grupo WhatsApp" podem ser atualizados nos atributos ``href`` dos elementos ``<a>`` dentro do componente ``src/main.js``.

**Textos do Header e Footer:** Os textos principais do cabeçalho (Workshop, Fogueira dos Boletos) estão em ``src/presentation.js``, e os textos da seção "Sobre a Mentora" no ``src/footer.js``.

**Imagens:**

A imagem de background do header (``fire.gif``) e do perfil (``profile.sarom-no-background.png``) são referenciadas via CSS e import no JSX, respectivamente. Para trocá-las, substitua os arquivos na pasta ``public/assets/images/`` ou ``src/assets/images/`` (dependendo de como foram importadas) e atualize os caminhos se necessário. Recomenda-se manter o mesmo formato e otimização para melhor performance.


Para alterações de layout ou funcionalidades mais complexas, recomenda-se o contato com o desenvolvedor.

📞 Contato do Desenvolvedor
Para suporte, dúvidas ou futuras modificações, por favor, entre em contato:

Developer Web: **Bruno Teixeira**

- [![LinkedIn](https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff)](https://www.linkedin.com/in/brunotxrs/)

- [![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/brunotxrs)

## 📜Licença
Este projeto está sob a [Licença MIT](./License). Sinta-se à vontade para usar, modificar e compartilhar\! 🚀