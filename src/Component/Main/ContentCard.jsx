import styled from 'styled-components'
import Arrow from '../Icons/Arrow';
import Comment from '../Icons/Comment';
import Bookmark from '../Icons/Bookmark';

const Card = styled.article`
border: 1px solid #2d323c;
border-radius: 10px;
height: 380px;
width: 100%;
padding: 12px 7px;
background: #1d1f25;

.card {
    &_title{
        height: 170px;
        padding: 0 15px;
        color: #fff;
        font-size: 14px;
        line-height: 1.5;
        display: flex;
        flex-direction: column;

        &_logo {
            width: 25px;
            height: 25px;
            margin-bottom: 20px;
            border-radius: 50%;
            overflow: hidden;
    
            img {
                margin-top: 5px; 
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
                overflow: hidden;
            }
        }

        &_date {
            color: #a1abc6;
            font-size: 13px;
            margin-top: auto;

        }
    }

    

    &_image {
        height: 140px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &_reactions, &_sponsor {
        height: 70px;

    }
    &_reactions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        color: #a8b3cf;

        &_reaction {
            display: flex;
            align-items: center;
            font-weight: bold;

            .reaction-count {
                margin-left: 10px;
            }
        }
        
    }
}
`

const SponsoredCard = styled(Card)`

.card {
    &_sponsor {
        color: #757d92;
        display: flex;
        align-items: center;
        padding: 0 15px;
        font-size: 14px;

    }
}
`

export default function ContentCard({
    sponsored = {},
    title,
    image,
    logo,
    date, 
    readTime,
    reactions,
}) {

    if(sponsored.by) {
        return (
            <SponsoredCard>
                <div className="card_title">
                    <span>
                        {title}
                    </span>
                </div> 
                <div className="card_image">
                    <img src={image} alt="" />
                </div>
                <div className="card_sponsor">
                    <span>
                        Promoted by {sponsored.by}
                    </span>
                </div>
            </SponsoredCard>
        )
    }

    const reactionList = [
        {
            Icon: Arrow,
            label: reactions.likes > 0 ? reactions.likes : '',
        },
        {
            Icon: Comment,
            label: reactions.comments > 0 ? reactions.comments : '',
        },
        {
            Icon: Bookmark,
            label: reactions.comments > 0 ? reactions.comments : '',
        }
    ]
    return (
        <Card>
            <div className="card_title">
                <div className="card_title_logo">
                    <img src= {logo} alt="" />
                </div>
                <span>
                    {title}
                </span>
                <div className="card_title_date">
                    <span>
                        {date}
                    </span>
                    <span>
                        {readTime}
                    </span>
                </div>
            </div>
            <div className="card_image">
                <img src={image} alt="" />
            </div>
            <div className="card_reactions">
                { reactionList.map( reaction => (
                    <div className="card_reactions_reaction" key={ reaction.Icon}>
                        <reaction.Icon color="#a8b3cf" size={20} />
                        <span className="reaction-count">
                            {reaction.label}
                        </span>
                    </div>
                )) }
            </div>
        </Card>
    )
}