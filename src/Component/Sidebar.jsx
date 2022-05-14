import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Filter from './Icons/Filter'
import Home from './Icons/Home'
import Fire from './Icons/Fire'
import Arrow from './Icons/Arrow'
import Comment from './Icons/Comment'
import Search from './Icons/Search'
import Bookmark from './Icons/Bookmark'
import Eye from './Icons/Eye'
import Settings from './Icons/Settings'

const Aside = styled.aside `
padding-top: 40px;
width: 200px;
border-right: 2px solid #2d323c;
height: calc(100vh - var(--header-size));
.link{
    align-items: center;
    padding: 5px 15px;
    text-decoration: none;
    color: #a7b2ce;

    &:hover, &.active {
        background: #2d323c;
        color: #fff;
    }

    &_label{
        margin-left: 12px;
        flex: 1;
        color: #fff;
        
    }

    .filter-btn{
        width: 14px;

    }
}

.section {
    margin-top: 5px; 
    &_title {
        padding-left: 15px;
        font-size: 12px;
        font-weight: bold;
        color: #70788d;
    }
    ul { 
        margin-top: 15px;
    }
}

`

const discoverLinks = [
    {
        icon: Fire,
        label: 'Popular'
    },
    {
        icon: Arrow,
        label: 'Most Voted'
    },
    {
        icon: Comment,
        label: 'Best Discussion'
    },
    {
        icon: Search,
        label: 'Search'
    }
]

const manageLinks = [
    {
        icon: Bookmark,
        label: 'Bookmarks'
    },
    {
        icon: Eye,
        label: 'Reading History',
    },
    {
        icon: Settings,
        label: 'Customize',
    }
]

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
                <div className="section">
                    <span className='section_title'>Discover</span>
                    <ul>
                        {discoverLinks.map((link) => (
                            <Link key={link.label} to='' className="flex link">
                                <link.icon color="#fff" size={18} />
                                <span className="link_label">
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                    </ul>
                </div>

                <div className="section">
                    <span className="section_title">Manage</span>
                    <ul>

                    </ul>
                </div>
            </nav>
        </Aside>
    )
}