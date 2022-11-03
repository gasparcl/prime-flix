import styled from "styled-components"

export const LoaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding-top: 3rem;

    &.ResultsLoader {
        min-height: calc(100vh - 281px);
        padding-top: 0;
    }

    &.ResultsLoader__mobile {
        min-height: calc(100vh - 380px);
        padding-top: 0;
    }
`
