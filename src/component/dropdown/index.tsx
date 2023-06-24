import React, {FC, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import {POPPINSREGULAR} from '../../font';
import {Colors} from '../../helpers/colors';

interface IProps {
  buttonText: string;
  buttonStyle: string;
  textStyle: any;
  description: string;
  data: any;
  prop: (value: string, values: string) => {};
}

const Dropdowns: FC<IProps> = ({
  buttonText,
  buttonStyle,
  textStyle,
  description,
  data,
  prop,
}) => {
  const dropdownValue = (item, main) => {
    prop(item, main);
  };

  let Icons = () => {
    return (
      <Icon
        name="chevron-down-outline"
        color={Colors.day_mode.gray}
        size={15}
      />
    );
  };

  return (
    <View>
      <SelectDropdown
        data={data}
        defaultButtonText={buttonText}
        onSelect={(selectedItem, index) => {
          dropdownValue(selectedItem?.label, selectedItem?.value);
          console.log(selectedItem, index);
        }}
        renderDropdownIcon={Icons}
        dropdownIconPosition="right"
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem.label;
        }}
        rowTextForSelection={(item, index) => {
          return item.label;
        }}
        buttonStyle={[styles.buttonSty, buttonStyle]}
        buttonTextStyle={[styles.buttonText, textStyle]}
        dropdownStyle={{borderRadius: 10}}
        rowTextStyle={{
          fontFamily: POPPINSREGULAR,
          fontSize: 14,
          textAlign: 'left',
        }}
      />
    </View>
  );
};

export {Dropdowns};

const styles = StyleSheet.create({
  buttonSty: {
    width: '92%',
    alignSelf: 'center',
    top: 20,
    borderRadius: 50,
    height: 35,
    marginVertical: 5,
    paddingLeft: 5,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'left',
  },
  container: {
    minHeight: 48,
  },
  //   dropdown: {
  //     height: 40,
  //     borderColor: Colors.day_mode.primary,
  //     borderWidth: 0.5,
  //     borderRadius: 8,
  //     paddingHorizontal: 8,
  //     color: Colors.day_mode.black,
  //     marginVertical: 3,
  //     elevation: 10,
  //     backgroundColor: Colors.day_mode.white,
  //   },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    // zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.day_mode.black,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.day_mode.black,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
