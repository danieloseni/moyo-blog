import SummaryCardsContainer from 'components/cards/summary-cards/SummaryCardsContainer'
import React, { Fragment } from 'react'
import One from 'images/gallery/1.jpg';
import TitleTIle from 'components/title-tiles/TitleTIle';
import PostCard from 'components/cards/post-cards/PostCard';

const Dashboard = (props: object) => {
    return (
        <Fragment>
            <SummaryCardsContainer />
            <div className="row">
                <div className="col-md-6 col-xl-9">

                    <TitleTIle title="Top Post" />
                    <PostCard title="Card Title" body="The body of this post talks about what exactly the post has to offer I hope Moyo likes thihs" displayImage={One} />



                </div>


                <div className="col-md-6 col-xl-3">

                    <TitleTIle title="Runner-Ups" />
                    <PostCard title="Card Title" body="The body of this post talks about what exactly the post has to offer I hope Moyo likes thihs" displayImage={One} />

                    <PostCard title="Card Title" body="The body of this post talks about what exactly the post has to offer I hope Moyo likes thihs" displayImage={One} />



                </div>



            </div>
        </Fragment>


    )
}

Dashboard.propTypes = {

}

export default Dashboard
