# React Native Multiselect Sortable FlatList

React Native FlatList with the abality to sort and select the list items.

<img src="https://i.imgur.com/4DvHoXY.gif" width="350" />

## Getting started

### Install
    npm install react-native-multiselect-sortable-flatlist --save
or

    yarn add @react-native-community/datetimepicker
    
### Usage

    import MultiSelectSortableFlatlist from 'react-native-multiselect-sortable-flatlist';

### Example
 ```js
import React from 'react';
import { Alert, Text, StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SelectableCard from './compoenents/SelectableCard';
import Header from './compoenents/Header';
import MultiSelectSortableFlatlist from 'react-native-multiselect-sortable-flatlist';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ListData: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      ItemsSelected: [],
    };
  }

  onItemPress(item) {
    Alert.alert('Alert', item + ' Pressed', [{ text: 'OK', onPress: () => console.log('OK Pressed') }], {
      cancelable: true,
    });
  }

  onSelectionChanged(selectedItems) {
    this.setState({ ItemsSelected: selectedItems });
  }

  onSort(newListDataArray) {
    this.setState({ ListData: newListDataArray });
  }

  render() {
    return (
      <MultiSelectSortableFlatlist
        ref={MultiSelectSortableFlatlist => (this.MultiSelectSortableFlatlist = MultiSelectSortableFlatlist)}
        contentContainerStyle={styles.ListContainer}
        ListHeaderComponentStyle={styles.HeaderStyle}
        ListHeaderComponent={
          <Header
            SelectAll={() => this.MultiSelectSortableFlatlist.SelectAll()}
            DeselectAll={() => this.MultiSelectSortableFlatlist.DeselectAll()}
          />
        }
        data={this.state.ListData}
        keyExtractor={(item, index) => item}
        onItemTap={({ item, index }) => this.onItemPress(item)}
        onItemSelected={({ selectedItems, item, index }) => this.onSelectionChanged(selectedItems)}
        onItemDeselected={({ selectedItems, item, index }) => this.onSelectionChanged(selectedItems)}
        onSort={data => this.onSort(data)}
        renderItem={({ item, index, selected }) => (
          //Note: To view selection changes, your component should take a prop that will render changes based on "selected" bool
          <SelectableCard Selected={selected}>
            <Text style={styles.CardText}>{item}</Text>
          </SelectableCard>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  ListContainer: {
    paddingTop: StatusBar.currentHeight + hp(2),
  },
  CardText: {
    textAlign: 'center',
  },
  HeaderStyle: {
    paddingHorizontal: wp(4),
  },
});
```

### API

#### Props
| Name | Description | Default | Type |
|--|--|--|--|
| data | Exaxtly like react-native [FlatList data prop](https://facebook.github.io/react-native/docs/flatlist#data). An array of data to pass your rendered components. | None **(Required)** | Array |
| renderItem | `renderItem={({ item, index, selected }) => <YourComponent selected={selected} />}`. Similar to react-native [FlatList renderItem](https://facebook.github.io/react-native/docs/flatlist#renderitem), it provides both the item and index varables along with a new varable called selected (Bool), which allows you to provide [conditional rendering](https://reactjs.org/docs/conditional-rendering.html) as you see fit. | None **(Required)** | Func |
| keyExtractor | Exaxtly like react-native [FlatList keyExtractor prop](https://facebook.github.io/react-native/docs/flatlist#keyextractor). Used to extract a unique key for a given item at the specified index. Also import to give unique key for selection to differentiate each item.| None **(Required)** | Func |
| onItemTap | `({ item: object, index: number })  =>  void` Called when the touch is released. | None | Func |
| onItemSelected | `({ selectedItems: array, item: object, index: number })  =>  void` Called when items are selected. | None | Func |
| onItemDeselected | `({ selectedItems: array, item: object, index: number })  =>  void` Called when items are deselected. | None | Func |
| onSort | `(data  =>  void)` Called when list is resorted with same data in new array data. | None | Func |
| comparingFactor | If data prop is an array of JSON Objects, you can pass a JSON key that would use the value for uniquely differentiating each item instead of index its index number. | None | String |
| selectable | Enable or Disable all list items from being selected. | true | Bool |
| sortable | Enable or Disable list sorting ability. | true | Bool |
| scrollPercent | Sets where scrolling begins. A value of `5` will scroll up if the finger is in the top 5% of the FlatList container and scroll down in the bottom 5%. | 5 | Number |

#### Functions
| Name | Description | Returns |
|--|--|--|
| SelectAll() | Selects all of the items in the list and returns an array. | Array |
| DeselectAll() | Deselects all of the items in the list and returns an array. | Array |

### Mobile Usage
 - Tap on your item to get onItemTap called.
 - Press and hold on item to start selecting phase.
	 - After activating selecting phase, tap on any other item to select.
	 - Tapping on selected item will deselect item.
 - Press and hold on item and drag to move item.
	 - Drop item anywhere to resort.

### Running the example expo app

 1. `git clone https://github.com/react-native-community/react-native-datetimepicker.git`
 2. `cd react-native-multiselect-sortable-flatlist/examples`
 3. `npm install or yarn`
 4. `npm start or yarn start`

### How to contribute
1. Pull request
2. Make changes
3. Test Locally
4. Use prettier to format all code by running `yarn run format`
5. Request merge
