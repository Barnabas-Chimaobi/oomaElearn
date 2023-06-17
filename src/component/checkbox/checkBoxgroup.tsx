import React from 'react';
import {ScrollView} from 'react-native';
import {
  Button,
  Checkbox,
  Flex,
  List,
  WingBlank,
} from '@ant-design/react-native';

const AgreeItem = Checkbox.AgreeItem;
const CheckboxItem = Checkbox.CheckboxItem;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const CheckboxGroupExample = () => {
  const [checkedList, setCheckedList] = React.useState(
    new Set(defaultCheckedList),
  );
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = (value: any, e: {target: {checked: boolean}}) => {
    if (e.target.checked) {
      checkedList.add(value);
    } else {
      checkedList.delete(value);
    }

    setCheckedList(new Set(checkedList));
    setIndeterminate(
      !!checkedList.size && checkedList.size < plainOptions.length,
    );
    setCheckAll(checkedList.size === plainOptions.length);
  };

  const onCheckAllChange = (e: {target: {checked: boolean}}) => {
    setCheckedList(e.target.checked ? new Set(plainOptions) : new Set());
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <>
      <CheckboxItem
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}>
        Check all
      </CheckboxItem>
      <WingBlank>
        {plainOptions.map(a => (
          <CheckboxItem
            key={a}
            onChange={onChange.bind(this, a)}
            checked={checkedList.has(a)}>
            {a}
          </CheckboxItem>
        ))}
      </WingBlank>
    </>
  );
};

export {CheckboxGroupExample};
