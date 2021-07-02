import React from 'react'
import PropTypes from 'prop-types'
import StyledParagraph from './style'

function Paragraph({
    children,
    ellipsis,
    ...rest
}) {
    return (
        <StyledParagraph
            as="p"
            {...rest}
            ellipsis={ellipsis}
        >
            {children}
        </StyledParagraph>
    )
}

Text.propTypes = {
    children: PropTypes.any,
    type: PropTypes.oneOf([
        'primary',
        'secondary',
        'danger',
    ]),
    ellipsis: PropTypes.bool,
    size: PropTypes.oneOf([
        'xxsmall',
        'xsmall',
        'small',
        'normal',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
    ]),
    bold: PropTypes.bool,
}

export default Paragraph
