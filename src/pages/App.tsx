import { createEffect, on } from "solid-js";
import { Route, Routes, useNavigate } from "@solidjs/router";
import { View, activeElement, hexColor} from "@lightningjs/solid";
import { useFocusManager, useAnnouncer } from "@lightningjs/solid-primitives";
import Browse from './Browse';
import Portal from './Portal';
import TextPage from './Text';
import ButtonsPage from './Buttons';
import FlexPage from './Flex';
import FlexSizePage from './FlexSize';
import FlexColumnSizePage from './FlexColumnSize';
import FlexColumnPage from './FlexColumn';
import ButtonsMaterialPage from './ButtonsMaterial';
import Entity from './Entity';
import People from './People';
import NotFound from './NotFound';
import Background from '../components/Background';
import NavDrawer from '../components/NavDrawer/NavDrawer';
import {FocusRing} from '../components';
import theme from 'theme';
import { assertTruthy } from "@lightningjs/renderer/utils";

declare module '@lightningjs/solid-primitives' {
  // Augment the FocusManager KeyMap interface with our custom keys
  interface KeyMap {
    Menu: string;
  }
}

declare module '@lightningjs/solid' {
  interface ElementNode {
    heroContent?: boolean;
    backdrop?: any;
    entityInfo?: any;
    href?: string;
  }
}

const App = () => {
  useFocusManager({
    Menu: 'm'
  });
  useAnnouncer();
  const navigate = useNavigate();

  let focusRingRef, navDrawer, lastFocused;

  createEffect(on(activeElement, (elm) => {
    assertTruthy(elm);
    setTimeout(() => {
      if (elm.heroContent) {
        focusRingRef.parent = elm;
        focusRingRef.alpha = 1;
        focusRingRef.width = elm.width! + 10;
        focusRingRef.height = elm.height! + 10;
        focusRingRef.zIndex = (elm.zIndex! - 0.00000001);
      } else {
        focusRingRef.alpha = 0;
      }
    }, 10)
  }, { defer: true}))

  return (
    <View ref={window.APP}
      onLast={() => history.back()}
      onMenu={() => navigate('/')} style={{ width: 1920, height: 1080 }}
      onLeft={() => {
        if (navDrawer.states.has('focus')) {
          return false;
        }
        lastFocused = activeElement();
        navDrawer.setFocus();
      }}
      onRight={() => navDrawer.states.has('focus') && lastFocused.setFocus()}>
      <Background />
      <FocusRing color={hexColor(theme.color.focus)} ref={focusRingRef} />
      <Routes>
        <Route path="" component={Browse} />
        <Route path="examples" component={Portal} />
        <Route path="browse/:filter" component={Browse} />
        <Route path="text" component={TextPage} />
        <Route path="buttons" component={ButtonsPage} />
        <Route path="flex" component={FlexPage} />
        <Route path="flexsize" component={FlexSizePage} />
        <Route path="flexcolumnsize" component={FlexColumnSizePage} />
        <Route path="flexcolumn" component={FlexColumnPage} />
        <Route path="buttonsmaterial" component={ButtonsMaterialPage} />
        <Route path="entity/people/:id" component={People} />
        <Route path="entity/:type/:id" component={Entity} />
        <Route path="*all" component={NotFound} />
      </Routes>
      <NavDrawer ref={navDrawer} />
    </View>
  )
};

export default App;
