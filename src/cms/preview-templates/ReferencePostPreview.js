import React from 'react'
import PropTypes from 'prop-types'
import { ReferencePostTemplate } from '../../templates/reference-post'

const ReferencePostPreview = ({ entry, widgetFor }) => (
  <ReferencePostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

ReferencePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ReferencePostPreview
