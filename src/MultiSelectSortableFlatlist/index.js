import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

export default class MultiSelectSortableFlatlist extends React.Component {
  static defaultProps = {
    onItemSelected: () => {},
    onItemDeselected: () => {},
    onItemTap: () => {},
    onSort: () => {},
    scrollPercent: 5,
    sortable: true,
    selectable: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
    };
  }

  AddSelectedIndex(item, index, move = null) {
    if (!this.IsItemSelected(item) && this.props.selectable) {
      var selectedItems = this.state.selectedItems;
      selectedItems.push(item);
      this.setState({ selectedItems: selectedItems });
      this.props.onItemSelected({ selectedItems, item, index });
    }
    if (this.props.sortable && move && this.props.data.length >= 2) move();
  }

  OnTap(item, index) {
    var indexOfIndex = this.GetIndexofItem(item);
    if (indexOfIndex > -1) {
      var selectedItems = this.state.selectedItems;
      selectedItems.splice(indexOfIndex, 1);
      this.setState({ selectedItems: selectedItems });
      this.props.onItemDeselected({ selectedItems, item, index });
    } else if (this.state.selectedItems.length > 0) {
      this.AddSelectedIndex(item, index);
    } else {
      this.props.onItemTap({ item, index });
    }
  }

  DeselectAll() {
    this.setState({ selectedItems: [] });
    return [];
  }

  SelectAll() {
    if (!this.props.selectable) return;
    this.setState({ selectedItems: [...this.props.data] });
    return this.props.data;
  }

  GetIndexofItem(item) {
    if (this.props.comparingFactor) {
      return this.state.selectedItems.findIndex(comp => {
        return comp[this.props.comparingFactor] == item[this.props.comparingFactor];
      });
    } else {
      return this.state.selectedItems.indexOf(item);
    }
  }

  IsItemSelected(item) {
    if (this.props.comparingFactor) {
      return this.state.selectedItems.some(comp => {
        return comp[this.props.comparingFactor] == item[this.props.comparingFactor];
      });
    } else {
      return this.state.selectedItems.includes(item);
    }
  }

  OnSort(newDataOrder) {
    this.props.onSort(newDataOrder);
  }

  render() {
    return (
      <DraggableFlatList
        {...this.props}
        scrollPercent={this.props.scrollPercent}
        onMoveEnd={({ data }) => this.OnSort(data)}
        extraData={[this.state.selectedItems, { ...this.props.extraData }]}
        renderItem={({ item, index, move, moveEnd }) => (
          <TouchableWithoutFeedback
            onPress={() => this.OnTap(item, index)}
            onPressOut={() => moveEnd()}
            onLongPress={() => {
              this.AddSelectedIndex(item, index, move);
            }}>
            <View>
              {this.props.renderItem({
                item,
                index,
                selected: this.IsItemSelected(item),
              })}
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    );
  }
}
