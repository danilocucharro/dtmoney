import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /*trea colunas de tamanhos iguais */
    gap: 2rem;/*espaçamento dentro de cada um dos items dentro do grid*/
    margin-top: -6.5rem; /*colocando o sumario la em cima do header pra ter o feito de meio a meio */

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header{
            display:flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background{
            background: var(--green);
            color: #fff;
        }
    }

`
