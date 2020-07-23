import {ListButton, ShowButton, TopToolbar} from 'ra-ui-materialui'
import React from 'react'

export default ({basePath, data}) => (
  <TopToolbar>
    <ListButton basePath={basePath} />
    <ShowButton basePath={basePath} record={data} />
  </TopToolbar>
)
