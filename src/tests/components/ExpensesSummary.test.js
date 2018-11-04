import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import numeral from 'numeral';
import { shallow } from 'enzyme';

test('should correctly render exepnses with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();

});
test('should correctly render exepnses with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23534134134} />);
  expect(wrapper).toMatchSnapshot();

});