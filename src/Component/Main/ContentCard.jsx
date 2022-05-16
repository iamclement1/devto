import styled from 'styled-components'
import Arrow from '../Icons/Arrow';
import Comment from '../Icons/Comment';
import Bookmark from '../Icons/Bookmark';

const Card = styled.article`
border: 1px solid #2d323c;
border-radius: 10px;
height: 360px;
width: 100%;
padding: 12px 7px;

.card {
    &_title{
        height: 120px;
        padding: 0 10px;
        color: #fff;
        font-size: 20px;
        line-height: 1
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
        height: 30px;
    }
}
`

const SponsoredCard = styled(Card)`
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
                <div className="card-">
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
                    <div>
                        <reaction.Icon />
                        <span>
                            {reaction.label}
                        </span>
                    </div>
                )) }
            </div>
        </Card>
    )
}