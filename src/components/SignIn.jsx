import { Formik } from 'formik'
import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import FormikTextInput from './FormikTextInput' 

{/* DO FORMIK */}

const initialValues= {
  email: '',
  password: ''
}

export default function SignIn() {

  return (
      <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit, values}) => {
          return (
            <View style={styles.signin_container}>
              <FormikTextInput placeholder='email' name="email"></FormikTextInput>
              <FormikTextInput placeholder='password' secureTextEntry name="password"></FormikTextInput>
              <Button style={styles.btn_formik} onPress={handleSubmit} title='Sign In'></Button>
              {/* <FormikTextInput style={styles.formik_text}name="email"></FormikTextInput>
              <FormikTextInput style={styles.formik_text}name="password"></FormikTextInput> */}
            </View>
          )
        }}
    </Formik>
  )
}


const styles = StyleSheet.create({
  signin_container:{
    backgroundColor: '#fff',
    padding: 20,
  },
  formik_text:{
    borderStyle: 'solid',
    color: "#fff",
    borderColor: '#000',
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  btn_formik:{
    width: 10
  }
})
