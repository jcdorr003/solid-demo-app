import { IntrinsicNodeStyleProps, IntrinsicTextNodeStyleProps, hexColor } from '@lightningjs/solid';
import theme from 'theme';

// Augment existing intrinsic style prop interfaces to include our own
// app-specific states
declare module '@lightningjs/solid' {
  interface IntrinsicNodeStyleProps {
    // TODO: Refactor states to use a $ prefix
    active?: IntrinsicNodeStyleProps;
    disabled?: IntrinsicNodeStyleProps;
  }

  interface IntrinsicTextNodeStyleProps {
    // TODO: Refactor states to use a $ prefix
    active?: IntrinsicTextNodeStyleProps;
    disabled?: IntrinsicTextNodeStyleProps;
  }
}

export default {
  Page: {
    width: 1920, height: 1080
  } satisfies IntrinsicNodeStyleProps,
  headlineText: {
    width: 1200, height: 240,
    x: 360,
    // lineHeight: 170, // TODO: Add back when lineHeight is supported
    y: 455, contain: 'both',
    fontSize: 66,
    textAlign: 'center'
  } satisfies IntrinsicTextNodeStyleProps,
  headlineSubText: {
    width: 960,
    height: 170,
    // lineHeight: 170, // TODO: Add back when lineHeight is supported
    x: 530,
    y: 655, contain: 'both',
    fontSize: 48,
    textAlign: 'center'
  } satisfies IntrinsicTextNodeStyleProps,
  itemsContainer: {
    width: theme.layout.screenW,
    height: 600,
    y: 560,
    x: 0
  } satisfies IntrinsicNodeStyleProps,
  Thumbnail: {
    borderRadius: 16,
    width: 185, height: 278, scale: 1, zIndex: 2,
    focus: { scale: 1.1 }
  } satisfies IntrinsicNodeStyleProps,
  FocusRing: {
    borderRadius: 16,
    width: 194, height: 286, y: -5, x: -5
  } satisfies IntrinsicNodeStyleProps,
  showHeadline: { x: 70, y: 20 } satisfies IntrinsicNodeStyleProps,
  headlineBlur: {
    width: 1920,
    height: 150,
    x: 0,
    y: 0,
    zIndex: 14,
    alpha: 0.9,
    color: hexColor('#000000')
  } satisfies IntrinsicNodeStyleProps,
  RowTitle: {
    height: 60,
    width: 300,
    marginTop: 20,
    fontSize: 36,
    color: hexColor('#f0f0f0'),
    zIndex: 2
  } satisfies IntrinsicTextNodeStyleProps,
  Row: {
    display: 'flex',
    justifyContent: 'spaceBetween',
    height: 300,
  } satisfies IntrinsicNodeStyleProps,
  Column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart',
    gap: 20,
    width: theme.layout.screenW - (2 * theme.layout.marginX),
    x: theme.layout.marginX + theme.layout.gutterX,
    y: 48
  } satisfies IntrinsicNodeStyleProps,
  Rect: {
    width: 250,
    height: 100,
    y: 10,
    x: 300,
    color: hexColor('#0000ff')
  } satisfies IntrinsicNodeStyleProps,
  peopleBio: {
    ...theme.typography.body1,
    contain: 'both',
    width: 1500,
    height: 400
  } satisfies IntrinsicTextNodeStyleProps,
};

const Button = {
  width: 386,
  height: 136,
  color: hexColor('#000000'),
  alpha: 0.3,
  borderRadius: 30,
  border: { width: 5, color: hexColor('#cc33ff') },
  scale: 1,
  focus: {
    color: [hexColor('#58807d'), {duration: 2000}] as any, // TODO: Fix this type
    scale: 1.2,
    border: { width: 5, color: hexColor('#ff0000') },
    alpha: [1, {duration: 1500, delay: 200, timing: "easy-in"}] as any, // TODO: Fix this type
  },
  active: {
    color: hexColor('#33ff55')
  },
  disabled: {
    alpha: 1,
  }
} satisfies IntrinsicNodeStyleProps;

const TopBar = {
  color: hexColor('#00A699'),
  height: 8,
  y: 2,
  x: -4,
  width: Button.width + 8
} satisfies IntrinsicNodeStyleProps;

const ButtonText = {
  fontSize: 32,
  // lineHeight: Button.height, // TODO: Add back when lineHeight is supported
  contain: 'width',
  textAlign: 'center',
  mountY: -0.35,
  color: hexColor('#F6F6F9'),
  height: Button.height,
  width: Button.width,
  focus: {
    fontSize: 64
  }
} satisfies IntrinsicTextNodeStyleProps;

export const buttonStyles = {
  container: Button,
  topBar: TopBar,
  text: ButtonText
} satisfies Record<string, IntrinsicTextNodeStyleProps>;


export const MaterialButton = {
  width: 386,
  height: 136,
  color: hexColor('#715cab'),
  focus: {
    color: hexColor('#5a39a2'),
  },
  disabled: {
    color: hexColor('#291d43'),
  }
} satisfies IntrinsicNodeStyleProps;

export const MaterialButtonText = {
  fontSize: 32,
  contain: 'width',
  textAlign: 'center',
  mountY: -0.35,
  color: hexColor('#FFFFFF'),
  height: MaterialButton.height,
  width: MaterialButton.width,
  // lineHeight: MaterialButton.height, // TODO: Add back when lineHeight is supported
  focus: {
    fontSize: 40
  },
  disabled: {
    color: hexColor('#909090'),
  }
} satisfies IntrinsicTextNodeStyleProps;
