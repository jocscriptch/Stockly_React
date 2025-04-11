import styled from "styled-components";

export function HomeTemplate() {
    return (
        <Container>
            <h1>Home Template</h1>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    background-color: ${(props) => props.theme.bgtotal};
    color: ${(props) => props.theme.text};
    width: 100%;
`;
