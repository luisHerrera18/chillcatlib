// Button.stories.tsx
import React from "react";
import { Meta } from '@storybook/react';
import Button from '../../../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const DefaultButton = () => <Button label='test' />;
export const NoLabel = () => <Button />;
export const LongLabel = () => <Button label="testestestsetstsetestestestestest" />;
