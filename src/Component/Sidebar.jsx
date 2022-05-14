import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Filter from './Icons/Filter'
import Home from './Icons/Home'

const Aside = styled.aside `
padding-top: 40px;
width: 200px;
border-right: 2px solid #2d323c;
height: calc(100vh - var(--header-size));
.link{
    align-items: center;
    background: #2d323c;
    padding: 5px 10px;
    text-decoration: none;

    &_label{
        margin-left: 12px;
        flex: 1;
        color: #fff;
        
    }

    .filter-btn{
        width: 14px;

    }
}

`

export default function Sidebar () {
    return (
        <Aside>
            <nav>
                <Link to=''
                className="link flex">
                    <Home color="#fff" size={25} />
                    <span className="link_label">
                        My Feed
                    </span>
                    <button className='filter-btn'>
                        <Filter color= 'rgba(255, 255, 255, 0.5)'
                        size={14} />
                    </button>
                </Link>
            </nav>
        </Aside>
    )
}