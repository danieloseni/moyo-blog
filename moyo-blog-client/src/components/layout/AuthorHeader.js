import React from 'react'
import Author from 'images/author.jpg'
const AuthorHeader = props => {
    return (
        <div className="header-author">
            <div className="author-bx">
                <div className="author-media">
                    <img src={Author} alt = "author" />
                </div>
                <div className="author-info">
                    <h2 className="title">Hi. i am Moh Moyo</h2>
                    <p>I am a developer based in Melbourne</p>
                    <ul className="author-social">
                        <li><a href="javascript:void(0);" className><i className="fa fa-facebook" /> <span>facebook</span></a></li>
                        <li><a href="javascript:void(0);" className><i className="fa fa-instagram" /> <span>instagram</span></a></li>
                        <li><a href="javascript:void(0);" className><i className="fa fa-twitter" /> <span>twitter</span></a></li>
                        <li><a href="javascript:void(0);" className><i className="fa fa-linkedin" /> <span>linkedin</span></a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

AuthorHeader.propTypes = {

}

export default AuthorHeader
