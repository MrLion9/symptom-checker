import React from 'react';
import {
  StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flex7: {
    flex: 7
  },
  flex6: {
    flex: 6
  },
  flex5: {
    flex: 5
  },
  flex4: {
    flex: 4
  },
  flex3: {
    flex: 3
  },
  flex2: {
    flex: 2
  },
  flex1: {
    flex: 1
  },
  searchBlock: {
    backgroundColor: 'white'
  },
  tagsBlock: {
    flex: 6,
    flexDirection: 'row',
    backgroundColor: '#d7dce0'
  },
  filteredTagsBlock: {
    flex: 2
  },
  filteredTags: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  selectedTagsBlock: {
    flex: 1
  },
  actionBlock: {
    flex: 1,
    backgroundColor: '#002e43'
  },

  searchInput: {
    lineHeight: 20
  },
  tag: {
    // backgroundColor: 'transparent',
    backgroundColor: '#faa2ad',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent',
    margin: 5,
    alignContent: 'center',
    //display: 'inline-flex',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 3,
  },
  tagText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  }
});