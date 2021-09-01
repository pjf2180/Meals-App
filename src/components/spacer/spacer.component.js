import React from "react";
import styled, { useTheme } from "styled-components/native";

function getPropertyName(side) {
  const names = {
    left: "padding-left",
    right: "padding-right",
    top: "padding-top",
    bottom: "padding-bottom",
  };
  return names[side];
}
function getPropertyValue(size, theme) {
  const spaceIndex = theme.spaceSizes[size];
  const value = theme.space[spaceIndex];
  return value;
}
const buildRule = (variant, theme) => {
  const variantComponents = variant.split(".");
  const side = variantComponents[0];
  const spaceSize = variantComponents[1];
  const propertyName = getPropertyName(side);
  const value = getPropertyValue(spaceSize, theme);
  return `${propertyName}:${value}`;
};
const Spacer = styled.View`
  ${({ rule }) => rule}
`;
export const SpacerView = ({ variant, children }) => {
  const theme = useTheme();
  const rule = buildRule(variant, theme);
  return <Spacer rule={rule}>{children}</Spacer>;
};

SpacerView.defaultProps = {
  variant: "bottom.medium",
};
