import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "./AppTextInput";
import AppErrorMessage from "./AppErrorMessage";

function AppFormField({ name, width, ...props }) {
  const { setFieldTouched, setFieldValue, values, errors, touched } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...props}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
