import { useNode } from "@craftjs/core";
import { Settings, StringSetting, StyleSetting } from "idling-engine-core";

export const ComponentSettings = () => {
  const {
    actions: { setProp },
    componentName,
    props,
  } = useNode((node) => ({
    componentName: node.data.name,
    props: node.data.props,
  }));

  return (
    <Settings
      config={[
        {
          type: StyleSetting,
          property: "customStyleName",
          componentName,
        },
        {
          type: StringSetting,
          property: "text",
          componentName,
        },
      ]}
      properties={props}
      setProp={setProp}
    />
  );
};
