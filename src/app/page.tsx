"use client";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import NextJsLanding from "./Home/page";

const Home = () => {
  const minSize = 30;
  return (
    <div className="w-full">
      <PanelGroup direction="horizontal">
        <Panel minSize={minSize}>
          <NextJsLanding />
        </Panel>
        <PanelResizeHandle className="w-[2px] cursor-col-resize bg-stone-300 dark:bg-stone-600" />
        <Panel minSize={minSize}>
          <NextJsLanding />
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Home;
