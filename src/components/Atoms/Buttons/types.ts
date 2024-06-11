import { ViewStyle, TextStyle, TouchableOpacityProps } from "react-native";
export type CustomButtonProps = Omit<
  TouchableOpacityProps,
  "style" | "children"
> & {
  onPress: () => void;
  title: String;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: Boolean;
  activeOpacity?: Number;
  loading?: Boolean;
};
/* 
export type CustomButtonProps = {
    onPress: () => void;
    onLongPress: () => void;
    title: String;
    style?: {
      width?: String;
      alignSelf?: String;
      borderWidth?: Number;
      borderColor?: String;
      borderRadius?: Number;
    };
    textStyle?: {
      fontSize?: Number;
    };
    disabled?: Boolean;
    activeOpacity?: Number;
    loading?: Boolean;
  };*/
