import React from "react";
// import { useSetupComponent } from "../../../config/useSetupComponent";
// import { TextSettings } from "./TextSettings";
// import { StringSetting } from "../../Settings";
import { Documentation } from "./Documentation";
// import { documentation } from "../../../data/documentation";

const { useSetupComponent } = window as any;

export const CustomText = ({ text, customStyleName }: any) => {
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

CustomText.componentName = "CustomText";

CustomText.craft = {
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

CustomText.baseStyle = {
  margin: "0em",
};

// Text.styleProperties = [
//   {
//     property: "fontSize",
//     type: StringSetting,
//   },
// ];

CustomText.documentation = Documentation;

CustomText.toolboxItem = (connectors: any) => {
  return {
    name: "CustomText",
    component: CustomText,
    ref: (ref: any) => connectors.create(ref, <CustomText />),
  };
};

const { registerCustomComponent } = window as any;

if (registerCustomComponent) {
  registerCustomComponent(CustomText);
}
