import { SearchForm } from '../components/SearchForm'

export default {
    title: 'Netflix -  SearchForm component',
    component: SearchForm,
}

const Template = args => <SearchForm {...args}/>;

export const Default = Template.bind({});
