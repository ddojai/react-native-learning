import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import Box from './components/Box';

const App = () => {
  const [visible, setVisible] = useState(true);
  return (
    <SafeAreaView>
      <Box rounded={true} size="large" color="blue" />
    </SafeAreaView>
  );
};

export default App;
