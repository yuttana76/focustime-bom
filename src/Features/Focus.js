import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes'
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <TextInput
          style={style.textInput}
          label="What you focus on?"
          onChangeText={setSubject}
        />
        <View style={style.button}>
          <RoundedButton
            size={spacing.xxl}
            title="+"
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    // flex: 1,
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 0.8,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.xxl,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
