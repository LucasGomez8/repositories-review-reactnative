import { useField } from 'formik'
import React from 'react'
import TextInputFormik from './TextInputFormik'
import { StyleSheet, Text } from 'react-native';

export default function FormikTextInput({name, ...props}) {

  const [field, meta, helpers] = useField(name);
  const sError = meta.touched && meta.error;

  return (
    <>
        <TextInputFormik
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={sError}
        {...props}
        style={styles.textinput}
        >
        </TextInputFormik>
        {sError && <Text>{meta.error}</Text>}
    </>
  )
}

const styles = StyleSheet.create({
  textinput:{
    borderStyle: 'solid',
    borderWidth: 1,
    color: "#000",
    borderColor: '#ccc',
    borderRadius: 7,
    marginVertical: 10,
    padding: 10
  }
})