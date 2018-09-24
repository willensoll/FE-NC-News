import React from 'react'
import { Avatar } from '@material-ui/core'
import propTypes from 'prop-types'
import { once } from 'lodash'


const Avatars = ({ avatar, user }) => {
    return <Avatar src={avatar} onError={once((e) => e.target.src = "/apple.jpg")} alt={`${user}'s avatar`} />
}

Avatars.propTypes = {
    avatar: propTypes.string.isRequired,
    user: propTypes.string.isRequired
}

export default Avatars