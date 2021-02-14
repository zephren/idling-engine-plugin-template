import React from "react";
import { Documentation } from "./Documentation";
import { ComponentSettings } from "./ComponentSettings";

const { useSetupComponent } = window as any;

export const PluginTemplate = ({ text, customStyleName }: any) => {
  const { refFn, componentClassName } = useSetupComponent();

  // const style = useCustomStyle(
  //   Text.baseStyle,
  //   customStyles.Text,
  //   customStyleName
  // );

  return (
    <span ref={refFn} className={componentClassName}>
      THE TEXT: {text}
    </span>
  );
};

PluginTemplate.componentName = "PluginTemplate";

PluginTemplate.craft = {
  props: {
    text: "Text",
  },
  rules: {
    canDrag: (node: any) => true,
  },
  related: {
    settings: ComponentSettings,
  },
};

PluginTemplate.baseStyle = {
  margin: "0em",
};

// PluginTemplate.styleProperties = [
//   {
//     property: "fontSize",
//     type: StringSetting,
//   },
// ];

PluginTemplate.documentation = Documentation;

PluginTemplate.toolboxItem = (connectors: any) => {
  return {
    name: "PluginTemplate",
    component: PluginTemplate,
    ref: (ref: any) => connectors.create(ref, <PluginTemplate />),
  };
};

const { registerCustomComponent } = window as any;

if (registerCustomComponent) {
  registerCustomComponent(PluginTemplate);
}
