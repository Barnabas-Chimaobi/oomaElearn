import React from 'react';
import {ScrollView} from 'react-native';
import {
  Button,
  Checkbox,
  Flex,
  List,
  WingBlank,
  Text,
} from '@ant-design/react-native';
const CheckboxItem = Checkbox.CheckboxItem;

class SingleCheck extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      checked: true,
      disabled: false,

      checkBox1: true,
      agreeItem1: true,
      checkboxItem1: true,
    };
  }

  onChange = (e: {target: {checked: boolean}}) => {
    console.log(`checked = ${e.target.checked}`);
  };

  toggleChecked = () => {
    this.setState({checked: !this.state.checked});
  };

  toggleDisable = () => {
    this.setState({disabled: !this.state.disabled});
  };
  onChange2 = (e: {target: {checked: boolean}}) => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  };

  render() {
    const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${
      this.state.disabled ? 'Disabled' : 'Enabled'
    }`;
    return (
      <List renderHeader="CheckboxItem">
        <CheckboxItem
          right
          checked={this.state.checkboxItem1}
          onChange={event => {
            this.setState({checkboxItem1: event.target.checked});
          }}>
          <Text style={{color: 'black'}}>Option 1</Text>
        </CheckboxItem>
      </List>
    );
  }
}

export {SingleCheck};
