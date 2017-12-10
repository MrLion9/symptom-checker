import React, { Component } from 'react';
import { Text, View, Picker, TouchableWithoutFeedback, Keyboard, Button} from 'react-native';
import { styles } from '../styles';

export default class SelectForm extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>
          <View style={[styles.flex7]}>
            <Picker selectedValue={this.props.value}
                    onValueChange={this.props.onFieldChange.bind(null, this.props.fieldName)}>
              {this.props.options.map((item, key) => {
                return (<Picker.Item label={item.toString()} key={key} value={item} />);
              })}
            </Picker>
          </View>

          <View style={[styles.boxContainer, styles.actionBlock]}>
            <Button
              onPress={this.props.onPressNext}
              title="Next"
              color="white"
              accessibilityLabel="">
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}