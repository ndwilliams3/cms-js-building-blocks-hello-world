import Header from './Header.jsx';

export default {
  name: 'Header',
  component: Header,
};

export const WithArgs = (args) => <Header {...args} />;
WithArgs.args = {
  brandColor: {
    color: '#0f0',
    opacity: 100,
  },
  text: 'Storybook args example',
};
