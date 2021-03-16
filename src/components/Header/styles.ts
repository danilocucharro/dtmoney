import styled from 'styled-components';

export const Container = styled.header `
    background: var(--blue);
`

export const Content = styled.div `
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem; /* 1rem é igual ao tamanho do font-size atribuitdo*/
    display: flex;
    align-items: center; /*os items atribuidos alinhados verticalmente no centro */
    justify-content: space-between; /*espaço em todos os items que estao dentro do content */

    button{
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25 rem; /*equivalente a 4px */
        height: 3rem;

        transition: filter 0.2s; /*uma leva animação de 2 milesimos para quando passarmos o cursor um cima do elemento */
        
        &:hover{
            filter: brightness(0.9) /*escurece a cor do botao quando a gente passa o cursor e cima */
        }
    }
` 