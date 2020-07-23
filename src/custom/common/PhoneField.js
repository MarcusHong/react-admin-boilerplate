import React from 'react'
import get from 'lodash/get'
import Typography from '@material-ui/core/Typography'

const PhoneField = ({record, style, ...rest}) => {
  const str = get(record, rest.source)
  return (
    <Typography style={style}>
      {str && str.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, '$1-$2-$3')}
    </Typography>
  )
}

PhoneField.defaultProps = {
  addLabel: true
}

export default PhoneField
