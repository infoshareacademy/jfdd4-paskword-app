import React from 'react';
import {
    ShareButtons,
    generateShareIcon
} from 'react-share';

import{Panel} from 'react-bootstrap';


const {FacebookShareButton} = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');


export default (props) => (
    <div>
        <Panel
            header={props.title}
            bsStyle="info">
            {props.text}
            <FacebookShareButton
                title={props.title}
                url={props.url}
                className="Demo__some-network__share-button"
            >
                <FacebookIcon
                    size={32}
                    round/>
            </FacebookShareButton>
        </Panel>

    </div>
)