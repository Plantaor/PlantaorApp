import React from "react";
import { useFormikContext } from "formik";
import { Picker } from "@react-native-picker/picker";
import { View, StyleSheet } from "react-native";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({ items, name, placeholder, ...otherProps }) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={values[name]}
        onValueChange={(itemValue) => setFieldValue(name, itemValue)}
        style={styles.picker}
        {...otherProps}
      >
        <Picker.Item label={placeholder} value="" />
        {items.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 40,
  },
  picker: {
    height: 40,
    width: '80%',
  },
});

export default AppFormPicker;
