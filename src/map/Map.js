import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import styles from './map-style.css'

export default (props) =>
    <div className="map">
        <GoogleMap
            center={[54.35118909616142, 18.644957542419434]}
            zoom={9}>
            <Place lat={18.644957542419434} lng={18.644957542419434} text={'A'} />
            <Place lat={60.955420} lng={30.337860} text={'B'} />
        </GoogleMap>
    </div>