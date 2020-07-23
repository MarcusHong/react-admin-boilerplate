import React from 'react'
import {Create, SimpleForm, TextInput, SelectInput} from 'react-admin'
import {required, userName} from '../../validators'
import CreateActions from '../../custom/common/CreateActions'
import CreateToolbar from '../../custom/common/CreateToolbar'
import choices from './choices'

export default (props) => (
  <Create {...props} actions={<CreateActions />}>
    <SimpleForm toolbar={<CreateToolbar />}>
      <TextInput source="name" validate={[userName, required]} />
      <SelectInput source="role" choices={choices.role} validate={required} />
      <TextInput source="password" type="password" validate={required} />
    </SimpleForm>
  </Create>
)
