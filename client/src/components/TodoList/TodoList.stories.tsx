import type { Meta, StoryObj } from "@storybook/react";

import { TodoList } from ".";

const meta: Meta<typeof TodoList> = {
  title: "components/Todo/TodoList",
  component: TodoList,
  args: {
    todoName: "Do the homework",
  },
};

export default meta;

type Story = StoryObj<typeof TodoList>;

const template: Story = {
  render: () => <TodoList />,
};

export const Default: Story = {
  ...template,
};

