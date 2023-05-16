/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  View,
  Text,
  Button,
} from 'react-native';

import {formatInfo} from './utils/formatInfo';
import {InfoAPI, InfoForm} from './types';
import {createUser} from './service/user';

export async function onSubmit(data: InfoForm) {
  const formatted: InfoAPI = formatInfo(data);
  const response = await createUser(formatted);
  return {
    ...formatted,
    created: response.ok,
  };
}

function App(): JSX.Element {
  const {control, handleSubmit} = useForm<InfoForm>();

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Information</Text>
          <Controller
            control={control}
            name="firstName"
            render={({field}) => (
              <TextInput
                {...field}
                onChangeText={field.onChange}
                placeholder="First name"
              />
            )}
          />
          <Controller
            control={control}
            name="middleName"
            render={({field}) => (
              <TextInput
                {...field}
                onChangeText={field.onChange}
                placeholder="Middle name"
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            render={({field}) => (
              <TextInput
                {...field}
                onChangeText={field.onChange}
                placeholder="Last name"
              />
            )}
          />
          <Controller
            control={control}
            name="job"
            render={({field}) => (
              <TextInput
                {...field}
                onChangeText={field.onChange}
                placeholder="Job"
              />
            )}
          />
          <Button title={'Create'} onPress={handleSubmit(onSubmit)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
