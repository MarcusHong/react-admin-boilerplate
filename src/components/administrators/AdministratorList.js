import React from 'react'
import {TopToolbar, CreateButton, Datagrid, DateField, List, SelectField, TextField} from 'react-admin'
import choices from './choices'

const Actions = ({basePath}) => (
  <TopToolbar>
    <CreateButton basePath={basePath} />
  </TopToolbar>
)

export default (props) => {
  return (
    <List {...props} exporter={false} actions={<Actions />} perPage={25} bulkActionButtons={false}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <SelectField source="role" choices={choices.role} />
        <DateField source="createdAt" locales="ko" />
        <DateField source="updatedAt" locales="ko" />
      </Datagrid>
    </List>
  )
}
