import React from 'react'
import PropTypes from 'prop-types'

type TitleTileProps = {
    title: String
}
const TitleTIle = ({title}: TitleTileProps) => {

    return (
        <div className="page-title-box page-title-box-alt">

            <h4 className="page-title">{title}</h4>
        </div>
    )
}

TitleTIle.propTypes = {

}

export default TitleTIle
