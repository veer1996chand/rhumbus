import { DatePickerProps } from "antd";
import { dateFormat } from "./constants";

export const customFormat: DatePickerProps["format"] = (value) =>
  `Date: ${value.format(dateFormat)}`;
