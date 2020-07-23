import React from 'react'
import {Edit, SelectInput, SimpleForm, TextInput} from 'react-admin'
import {password, required, userName} from '../../validators'
import EditActions from '../../custom/common/EditActions'
import EditToolbar from '../../custom/common/EditToolbar'
import choices from './choices'

export default (props) => (
  <Edit {...props} actions={<EditActions />}>
    <SimpleForm toolbar={<EditToolbar />}>
      <TextInput source="id" disabled />
      <TextInput source="name" validate={[userName]} />
      <SelectInput source="role" choices={choices.role} validate={required} />
      <TextInput source="password" validate={[password]} type="password" />
    </SimpleForm>
  </Edit>
)
