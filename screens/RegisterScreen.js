import React, { useState } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    const [signInError, setSignInError] = useState('');

    async function handleOnLogin(values) {
        const { email, password } = values;
        setSignInError(null);
        try {
            await loginWithEmail(email, password);
            navigation.navigate('SchedulerScreen');
        } catch (error) {
            setSignInError(error.message);
        }
    }

    async function handleOnSignUp(values) {
        const { name, email, password } = values;
        setSignInError(null);
        try {
            const authCredential = await registerWithEmail(email, password);
            const user = authCredential.user;
            await user.updateProfile({displayName: name});
            navigation.navigate('SchedulerScreen');
        } catch (error) {
            setSignInError(error.message);
        }
    }

    async function handleOnSubmit(values) {
        return values.confirm ? handleOnSignUp(values) : handleOnLogin(values);
    }

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Form
            initialValues={{
              email: '',
              password: '',
              confirm: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleOnSubmit}
          >
            <Form.Field
              name="email"
              leftIcon="email"
              placeholder="Enter email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <Form.Field
              name="password"
              leftIcon="lock"
              placeholder="Enter password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
            />
            <Form.Field
              name="confirmPassword"
              leftIcon="lock"
              placeholder="Confirm password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
            />
            <Form.Button title={values => values.confirm ? 'Register' : 'Login'} />
            {<Form.ErrorMessage error={signInError} visible={true} />}
          </Form>
        </ScrollView>
      </SafeAreaView>
    );
  };

  export default RegisterScreen;