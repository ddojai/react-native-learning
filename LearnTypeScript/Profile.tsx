import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  name: string;
  isActive?: boolean;
}

function Profile({name, isActive}: Props) {
  return (
    <View style={isActive && styles.activeStyle}>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  activeStyle: {
    backgroundColor: 'yellow',
  },
});

export default Profile;
