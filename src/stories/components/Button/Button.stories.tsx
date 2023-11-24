// Button.stories.tsx
import React from "react";
import { Meta } from '@storybook/react';
import Button from '../../../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const DefaultButton = () => <Button label='default' />;
export const Light = () => <Button label="light" mode="light"/>;
export const Dark = () => <Button label="dark" mode="dark"/>;
