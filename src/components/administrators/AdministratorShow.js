import React from 'react'
import {DateField, SelectField, Show, SimpleShowLayout, TextField} from 'react-admin'
import choices from './choices'

export default (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <SelectField source="role" choices={choices.role} />
        <DateField source="createdAt" locales="ko" />
        <DateField source="updatedAt" locales="ko" />
      </SimpleShowLayout>
    </Show>
  )
}
