import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, StyleSheet } from 'react-native';

export default class SelectableCard extends React.PureComponent {
  render() {
    return (
      <View style={this.props.Selected ? styles.selectedWrapper : styles.wrapper}>
        <View
          style={[
            styles.containerStyle,
            {
              borderColor: this.props.Selected ? 'blue' : 'white',
              borderWidth: this.props.Selected ? 1.5 : 0,
            },
          ]}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
  },
  selectedWrapper: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(6),
  },
  containerStyle: {
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
    height: hp(15),
  },
});
