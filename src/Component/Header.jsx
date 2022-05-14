import styled from 'styled-components'

const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
height: var(--header-size);
align-items: center;
border-bottom: 1px solid #2d323c;
padding: 0 20px;

.daily-dev-logo {
    width: 130px

    img {
        width: 100%;
    }
}

.user {
    display: flex;
    align-items: center;
    --size: 45px;
    --radius: 10px;

    .points {
        width: var(--size);
        height: var(--size);
        color: white;
        background-color: #1d1f25
        border-top-left-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
        font-weight: bold;
        font-size:18px;
        
    }

    &_img{
        width:var(--size);
        height: var(--size);
        border-radius: var(--radius);
        overflow: hidden;
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