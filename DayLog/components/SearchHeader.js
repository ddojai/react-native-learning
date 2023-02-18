import React from 'react';
import {
  Pressabe,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function SearchHeader() {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.block, {width: width - 32}]}>
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요"
        autoFocus
      />
      <Pressabe
        style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}>
        <Icon name="cancel" size={20} color="#9e9e9e" />
      </Pressabe>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  button: {
    marginLeft: 8,
  },
});

export default SearchHeader;
