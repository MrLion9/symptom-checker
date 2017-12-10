import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  Button
} from 'react-native';

import TagInput from 'react-native-tag-input';

import { styles } from '../styles'

export default class SearchForm extends React.Component {

  render () {
    const props = this.props;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.main}>
          <View style={[styles.boxContainer, styles.searchBlock, styles.flex1]}>
            <TagInput style={[styles.searchInput]} value={props.selected}
                      labelExtractor={(symptom) => {return symptom.Name}}
                      text={props.search}
                      onChange={props.updateSelectedTags}
                      onChangeText={props.onSearch}/>
          </View>

          <View style={[styles.boxContainer, styles.tagsBlock]}>

            <View style={[styles.boxContainer, styles.filteredTagsBlock]}>
              <ScrollView
                showsVerticalScrollIndicator={true}>
                <View style={[styles.filteredTags]}>
                  {props.filtered.map((symptom, key) => {
                    return (
                      <TouchableHighlight key={key}
                                          underlayColor="lightgrey"
                                          onPress={props.select.bind(null, symptom)}>
                        <View style={styles.tag}>
                          <Text style={styles.tagText}>{symptom.Name}</Text>
                        </View>
                      </TouchableHighlight>
                    );
                  })}
                </View>
              </ScrollView>
            </View>

          </View>

          <View style={[styles.boxContainer, styles.actionBlock]}>
            <Button
              onPress={props.searchAction}
              title={props.searchTitle}
              color="white"
              accessibilityLabel=""
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}