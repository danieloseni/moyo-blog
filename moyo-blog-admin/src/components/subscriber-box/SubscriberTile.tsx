import React, {SyntheticEvent} from 'react'
import PropTypes from 'prop-types'
import Switch from 'react-switch';

type SubscriberTileProps = {
    name: String,
    email: String,
    onChange: (checked: boolean, event: MouseEvent | SyntheticEvent<MouseEvent | KeyboardEvent, Event>, id: string) => void,
    checked: boolean
}

const SubscriberTile = ({name, email, onChange, checked}: SubscriberTileProps) => {
    return (
        <div className="inbox-item">

            <a href="#">
                {/* <div className="inbox-item-img"><img src="../assets/images/users/user-1.jpg" className="rounded-circle" alt="" /></div> */}
                <h5 className="inbox-item-author mt-0 mb-1">Guy {name}</h5>
                <p className="inbox-item-text">{email}</p>
                <p className="inbox-item-date"><Switch onChange={onChange} checked={checked} /> </p>
            </a>
        </div>
    )
}

SubscriberTile.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool
}

export default SubscriberTile
