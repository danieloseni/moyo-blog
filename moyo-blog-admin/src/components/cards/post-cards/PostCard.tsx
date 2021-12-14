import React from 'react'
import PropTypes from 'prop-types'
import One from 'images/gallery/1.jpg';


type PostCardProps = {
    title: String,
    body: String,
    displayImage: String
}

const PostCard = ({title, body, displayImage}: PostCardProps) => {
    // const {title, body, displayImage} = post.props
    return (
        <div className="card">
                        <img className="card-img-top img-fluid" src={One} alt="Card  cap" />
                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make
                                up the bulk of the card's content.</p>
                        </div>
                    </div>
    )
}

PostCard.propTypes = {

}

export default PostCard
