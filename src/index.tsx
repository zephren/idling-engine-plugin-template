import React from "react";
// import { useSetupComponent } from "../../../config/useSetupComponent";
// import { TextSettings } from "./TextSettings";
// import { StringSetting } from "../../Settings";
import { Documentation } from "./Documentation";

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
      {text}!!!
    </span>
  );

  // return (
  //   <span ref={refFn} className={componentClassName} style={style}>
  //     {text}
  //   </span>
  // );
};

PluginTemplate.componentName = "PluginTemplate";

PluginTemplate.craft = {
  props: {
    text: "Text",
  },
  rules: {
    canDrag: (node: any) => true,
  },
  // related: {
  //   settings: TextSettings,
  // },
};

PluginTemplate.baseStyle = {
  margin: "0em",
};

// Text.styleProperties = [
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
