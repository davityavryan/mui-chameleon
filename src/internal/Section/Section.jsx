import React from 'react';
import PropTypes from 'prop-types';

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import themeKeyLabel from '../../utils/themeKeyLabel';

const useStyles = makeStyles(({ spacing }) => ({
    summaryRoot: {
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
    },
    summaryContent: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}));

function Section({ title, secondaryTitle, children }) {
    const classes = useStyles();

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                classes={{ root: classes.summaryRoot, content: classes.summaryContent }}
                expandIcon={Boolean(children) ? <ExpandMoreIcon /> : null}
                disabled={!Boolean(children)}
            >
                <Typography variant="subtitle1">
                    {themeKeyLabel(title)}
                </Typography>

                {secondaryTitle && (
                    <Typography variant="caption" color="textSecondary">
                        {secondaryTitle}
                    </Typography>
                )}
            </ExpansionPanelSummary>

            {children && <div>{children}</div>}
        </ExpansionPanel>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    secondaryTitle: PropTypes.string,
    children: PropTypes.node,
};

Section.defaultProps = {
    secondaryTitle: '',
    children: null,
};

export default Section;
