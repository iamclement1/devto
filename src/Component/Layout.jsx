import styled from 'styled-components'
import Header from './Header'
import MainContent from './Main/MainContent'
import Sidebar from './Sidebar'

const Container = styled.div`
background-color : var(--main-color);
width: 100%;
min-height : 100vh;
--header-size: 30px;
`

export default function Layout () {
    return (
        <Container>
            <Header/>
            <div className="flex">
                <Sidebar />
                <MainContent /> 
            </div>
        </Container>
    )

}