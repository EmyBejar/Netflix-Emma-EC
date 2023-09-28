import { GenreSelect } from "../components/GenreSelect";
import { action } from '@storybook/addon-actions';

export default {
  title: "Netflix -  GenreSelect component",
  component: GenreSelect,
};
;

const Template = (args) => <GenreSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
    genres: ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"],
    selectedGenre: "ALL", 
    onSelect: action("Action"), 
};
