import React from 'react';
import { cssBaseline, useTheme } from '@opensesame/gemini';
import { styled, keyframes } from '@stitches/react';
import { blackA } from '@radix-ui/colors';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import * as PopoverPrimitive from '@radix-ui/react-popover';

const theme = useTheme();
cssBaseline();

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});
const StyledContent = styled(PopoverPrimitive.Content, {
  borderRadius: theme.spacing.unit / 2,
  padding: theme.spacing.unit * 2,
  width: 260,
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows[3],
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
  '&:focus': {
    boxShadow: theme.shadows[3],
  },
});

const StyledArrow = styled(PopoverPrimitive.Arrow, {
  fill: theme.palette.common.white,
});

const StyledClose = styled(PopoverPrimitive.Close, {
  all: 'unset',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 5,
  right: 5,

  '&:hover': { backgroundColor: theme.palette.primary.light },
  '&:focus': { boxShadow: theme.shadows[1] },
});

// Exports
export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = StyledContent;
export const PopoverArrow = StyledArrow;
export const PopoverClose = StyledClose;

// Your app...
const Flex = styled('div', { display: 'flex' });

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: theme.typography.variants.body1?.fontFamily,
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  backgroundColor: 'white',
  boxShadow: theme.shadows[3],
  '&:hover': { backgroundColor: theme.palette.primary.light },
  '&:focus': { boxShadow: theme.shadows[1] },
});
const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
});

const Label = styled('label', {
  fontSize: 13,
  width: 75,
});

const Input = styled('input', {
  all: 'unset',
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1',
  borderRadius: theme.spacing.unit / 4,
  padding: '0 8px',
  fontSize: 14,
  lineHeight: 1,
  height: 25,
  border: `1px solid ${theme.palette.secondary.light}`,
  '&:focus': {
    border: `1px solid ${theme.palette.primary.main}`,
  },
});

const Text = styled('div', {
  ...theme.typography.variants.body1,
  margin: 0,
});

const App = () => (
  <Popover>
    <PopoverTrigger asChild>
      <IconButton aria-label="Update dimensions">
        <MixerHorizontalIcon />
      </IconButton>
    </PopoverTrigger>
    <PopoverContent sideOffset={5}>
      <Flex css={{ flexDirection: 'column', gap: 10 }}>
        <Text css={{ marginBottom: 10 }}>Dimensions</Text>
        <Fieldset>
          <Label htmlFor="width">Width</Label>
          <Input id="width" defaultValue="100%" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="maxWidth">Max. width</Label>
          <Input id="maxWidth" defaultValue="300px" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="height">Height</Label>
          <Input id="height" defaultValue="25px" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="maxHeight">Max. height</Label>
          <Input id="maxHeight" defaultValue="none" />
        </Fieldset>
      </Flex>
      <PopoverArrow />
      <PopoverClose aria-label="Close">
        <Cross2Icon />
      </PopoverClose>
    </PopoverContent>
  </Popover>
);

export default App;
