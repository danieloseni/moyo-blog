import React from 'react'
import PropTypes from 'prop-types'
import Switch  from 'react-switch';
import SubscriberTile from './SubscriberTile';

const SubscriberBox = (props: object) => {
    return (
        <div className="inbox-widget">

            {
                Array.from({ length: 5 }, (v, i) => i).map(value => (
                    <SubscriberTile name = {value.toString()} email = "megoseni0569@gmail.com" checked = {true} onChange = {(value: boolean) => {}} />
                ))
            }




        </div>
    )
}

SubscriberBox.propTypes = {

}

export default SubscriberBox
