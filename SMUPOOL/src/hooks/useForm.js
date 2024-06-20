import { useEffect, useState } from "react";

function useForm({ initialValue, validate }) {
  const [touched, setTouched] = useState({});
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});

  const handleBlur = (name) => {
    setTouched({ ...touched, [name]: true });
  };

  const handleChangeText = (name, text) => {
    setValues({ ...values, [name]: text });
  };

  const handlePhoneNum = (name, text) => {
    if (text.length === 10) {
      setValues({ ...values, [name]: text.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3") });
    } else if (text.length === 13) {
      setValues({ ...values, [name]: text.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3") });
    } else {
      setValues({
        ...values,
        [name]: text,
      });
    }
  };
  const getTextInputProps = (name) => {
    const value = values[name];
    const onChange = (event) => handleChangeText(name, event.target.value);
    const onBlur = () => handleBlur(name);
    return { value, onChange, onBlur };
  };

  const getPhoneNumInputProps = (name) => {
    const value = values[name];
    const onChange = (event) => handlePhoneNum(name, event.target.value);
    const onBlur = () => handleBlur(name);
    return { value, onChange, onBlur };
  };

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
  }, [values, validate]);

  return { getTextInputProps, getPhoneNumInputProps, values, errors, touched };
}

export default useForm;
