import { Component, fields } from './index.jsx';
import {
  moduleStory,
  moduleStoryWithIsland,
} from '@hubspot/cms-dev-server/storybook';
export default {
  component: Component,
  title: 'TodoList',
};

// Automatically generates args for the story for the fields defined on the
// module. Not all fields are fully supported currently, but it falls back to an
// unopinionated object to specify custom shapes of field values
export const Story = moduleStory(Component, fields);

// To fully recreate component lifecycles with islands, uses the
// `/module/:moduleName` route we already provide to render the story. If you
// don't care about behavior specific to SSR/island behavior, `moduleStory` will
// do work the same and is compatible with hot module reloading
export const StoryWithIsland = moduleStoryWithIsland('TodoList', fields);
