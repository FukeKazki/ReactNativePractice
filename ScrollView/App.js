import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default class ScrollViewExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [
        { name: 'Ben', id: 1 },
        { name: 'Susan', id: 2 },
        { name: 'Robert', id: 3 },
        { name: 'Mary', id: 4 },
        { name: 'Daniel', id: 5 },
        { name: 'Laura', id: 6 },
        { name: 'John', id: 7 },
        { name: 'Debra', id: 8 },
        { name: 'Aron', id: 9 },
        { name: 'Ann', id: 10 },
        { name: 'Steve', id: 11 },
        { name: 'Olivia', id: 12 },
      ],
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {this.state.names.map((item, index) => (
            <View key={item.id} style={styles.item}>
              <Text>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justfyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1',
  },
});
