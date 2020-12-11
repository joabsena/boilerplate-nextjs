import { Story, Meta } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description defult'
  }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;

export const Default: Story = (args) => <Main {...args} />;
Default.args = {
  title: 'blbabasdsds',
  description: 'dsidsj'
};
