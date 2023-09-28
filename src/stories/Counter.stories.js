import React from 'react';
import { Counter } from '../components/Counter'
import { action } from '@storybook/addon-actions';


export default {
    title: 'Netflix -  Counter component',
    component: Counter,
}

const Template = args => <Counter {...args}/>;

export const Default = Template.bind({});
Default.args = {
  initialValue: 0
}
