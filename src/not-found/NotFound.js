import React from 'react'
import {Grid, Row} from 'react-bootstrap'
import LazyCat from './cat-not-found.jpg'


export default class NotFound extends React.Component {
render(){
        return (
            <Grid>
                <Row>
                    <h1>404 Strona nie istnieje</h1>
                </Row>
                <Row>
                    <img src={LazyCat} alt={"Strona nie istnieje"} className="img-responsive"/>
                </Row>
            </Grid>
        )
    }
}
