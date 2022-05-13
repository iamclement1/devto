import styled from 'styled-components'

const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
align-items: center;

.daily-dev-logo {
    width: 200px

    img {
        width: 100%;
    }
}

.user {
    align-items: center;
    .points {
        width: 60px;
        height: 60px;
        color: white;
    }

    &_img{
        width: 60px
        height: 60px;
    }

    img{
        width: 32px;
        height: 32px;
        object-fit: cover;
    }
}
`

export default function Header () {

    return (
        <StyledHeader>
            <div className="daily-dev-logo">
                <img src="/daily-dev.svg" alt="Brand Logo" />
            </div>

            <div className="user flex">
                <span className="points center">
                    50
                </span>
                <div className="user_img">
                    <img src="https://nnamdiclement.netlify.app/assets/Home-Image.387a41d2.png" 
                    alt="Nnamdi Clement" />
                </div>
            </div>
        </StyledHeader>
    )

}