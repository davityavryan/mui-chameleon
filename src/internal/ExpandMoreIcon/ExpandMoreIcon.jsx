import React, { memo } from 'react';

import Icon from '@material-ui/core/Icon';

function ExpandMoreIcon() {
    return (
        <Icon>
            <svg width="1em" height="1em">
                <g fill="none" fillRule="evenodd">
                    <path fill="currentColor" fillRule="nonzero" d="M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 10-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41c-.39-.38-1.03-.39-1.42 0z"/>
                </g>
            </svg>
        </Icon>
    );
}

export default memo(ExpandMoreIcon);
