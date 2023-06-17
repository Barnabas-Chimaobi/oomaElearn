import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {SORAREGULAR} from '../../font';
import {Select, Box, Center, CheckIcon} from 'native-base';
import {Icon, WingBlank} from '@ant-design/react-native';
import {Colors} from '../../helpers/colors';

interface IProps {
  buttonText: string;
  buttonStyle: string;
  textStyle: any;
  description: string;
  data: any;
  width: string;
  placeholer: string;
  prop: (value: string) => {};
}

const Selects: FC<IProps> = ({
  buttonText,
  buttonStyle,
  textStyle,
  width,
  placeholer,
}) => {
  const [service, setService] = React.useState('');
  return (
    <View>
      <Box>
        <Select
          style={{height: 30}}
          dropdownIcon={
            <Icon
              style={{marginRight: 10}}
              size={15}
              color={Colors.day_mode.primary}
              name="down"
            />
          }
          fontSize={11}
          selectedValue={service}
          minWidth={[width]}
          accessibilityLabel="Choose Service"
          placeholder={placeholer}
          _selectedItem={{
            bg: 'teal.600',
            // endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
      </Box>
    </View>
  );
};

export {Selects};

const style = StyleSheet.create({
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
});
