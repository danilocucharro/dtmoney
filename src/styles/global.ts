import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #e52e4d;
        --green: #33cc95;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{/*quando o usuario estiver com uma tela de ate 1080px de largura eu vou diminuir o font-size para 93.75% = 15px*/
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }
        /* e quando de ate 720px de largura, eu vou diminuir o font-size para 87.5% = 14px ex: 16 * 0,875 = 14*/
        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer; /*nosso cursor fica apontando para o conteudo*/
    }

    [disabled] { /*tudo que estiver desabilitado vamos deixar ele com menos opaciadade e quando o cursor passar em cima ele vai virar uma plaquinha de nao permitido*/
        opacity: 0.6;
        cursor: not-allowed;
    }
    
`