import React from 'react';
import { View, Button } from 'react-native';

export default class Header extends React.PureComponent {
  render() {
    return (
      <View>
        <Button title="Select All" onPress={() => this.props.SelectAll()} />
        <Button color={'blue'} title="Deselect All" onPress={() => this.props.DeselectAll()} />
      </View>
    );
  }
}
