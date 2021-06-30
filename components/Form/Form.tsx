/* eslint-disable react-hooks/exhaustive-deps */
import {
  ChangeEvent,
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';

import curp from '../../utils/validations/curp';
import email from '../../utils/validations/email';
import float from '../../utils/validations/float';
import length from '../../utils/validations/length';
import match from '../../utils/validations/match';
import maxLength from '../../utils/validations/maxLength';
import maxValue from '../../utils/validations/maxValue';
import minLength from '../../utils/validations/minLength';
import minValue from '../../utils/validations/minValue';
import numeric from '../../utils/validations/numeric';
import required from '../../utils/validations/required';
import requiredDate from '../../utils/validations/requiredDate';
import requiredSelected from '../../utils/validations/requiredSelected';
import string from '../../utils/validations/string';

interface ISelectOption {
  value: string | number;
  name: string;
}

interface IFormChildrenCall {
  handleSubmit: () => void;
  highlightRequired: () => void;
  valid: boolean;
  fields: IFields;
  handleChange: (name: string) => (value: any) => void;
}

export interface IValidations {
  required?: { errorMessage: string };
  requiredIf?: { field: string; equals: string };
  emailFormat?: { errorMessage: string };
  dateFormat?: { errorMessage: string };
  curp?: { errorMessage: string };
  minLength?: { min: number; errorMessage: string };
  maxLength?: { max: number; errorMessage: string };
  minValue?: { min: number; errorMessage: string };
  maxValue?: { max: number; errorMessage: string };
  match?: { match: string; errorMessage: string };
  string?: { errorMessage: string };
  length?: { length: number; errorMessage: string };
  numeric?: { errorMessage: string };
  float?: { errorMessage: string };
}

export interface IFieldSchema {
  name: string;
  value: any;
  validations?: IValidations;
  watch?: string[];
  options?: ISelectOption[];
}

export interface IFormField extends IFieldSchema {
  valid: boolean;
  errors: string[];
}

export interface IFields {
  [key: string]: IFormField;
}

interface IProps {
  children: (props: IFormChildrenCall) => ReactNode;
  onSubmit: (fields: IFields) => void;
  noValidation?: boolean;
  fields: IFieldSchema[];
}

const Form: FC<IProps> = (props) => {
  const [valid, setValid] = useState<boolean>(false);
  const [fields, setFields] = useState<IFields>({});

  useEffect(() => {
    createFields();
  }, []);

  const createFields = () => {
    const { fields: propFields } = props;
    const fields: IFields = {};
    for (const field of propFields) {
      const value = field.value;

      fields[field.name] = {
        ...field,
        errors: [],
        valid: field.validations ? false : true,
        value: field.options ? field.options[0].value : value,
      };

      // Validate non required fields when they're being created - avoid having to type in them to enable submit btn
      if (field.validations && field.validations?.required === undefined) {
        validateField(fields[field.name]);
      }

      if (field.value !== '' || field.options !== undefined) {
        validateOrSetErrors(fields[field.name], field.name);
      }
    }
    setFields(fields);
  };
  const handleChange = (name: string) => (
    event: ChangeEvent<HTMLInputElement> | Date,
  ) => {
    try {
      const input = fields[name];

      if (event instanceof Date) {
        input.value = event;
      } else if (event.target.type === 'checkbox') {
        // Handle boolean values - checkboxes
        input.value = event.target.checked;
      } else {
        input.value = event.target.value;
      }

      if (input) {
        validateOrSetErrors(input, name);
      }
    } catch (e) {
      //
    }
  };
  const validateOrSetErrors = (field: IFormField, name: string) => {
    validateField(field);
    if (field.watch && field.watch.length) {
      for (const input of field.watch) {
        validateField(fields[input]);
      }
    }
    const isFormValid = Object.keys(fields).every(
      (field) => fields[field].valid,
    );
    setFields({
      ...fields,
      [name]: {
        ...field,
        value: field.value,
      },
    });
    setValid(isFormValid);
  };
  const handleSubmit = () => {
    if (!valid && !props.noValidation) {
      highlightRequired();
    } else {
      if (props.onSubmit) {
        const parsedFormWithValues: any = {};
        Object.keys(fields).forEach(
          (name) => (parsedFormWithValues[name] = fields[name].value),
        );
        props.onSubmit(parsedFormWithValues);
      }
    }
  };
  const highlightRequired = () => {
    Object.keys(fields).forEach((name) => {
      const input = fields[name];
      validateOrSetErrors(input, name);
    });
  };
  const validateField = (field: IFormField) => {
    if (field.validations) {
      const validations = field.validations;
      const errors = [];
      if (validations.required) {
        if (
          typeof field.value === 'object' &&
          field.value.length !== 0 &&
          typeof field.value[0] === 'object'
        ) {
          if (!requiredSelected(field.value)) {
            errors.push(validations.required.errorMessage);
          }
        } else if (field.value instanceof Date) {
          if (!requiredDate(field.value)) {
            errors.push(validations.required.errorMessage);
          }
        } else {
          if (!required(field.value)) {
            errors.push(validations.required.errorMessage);
          }
        }
      }

      if (validations.dateFormat) {
        if (!requiredDate(field.value)) {
          errors.push(validations.dateFormat.errorMessage);
        }
      }
      if (validations.emailFormat) {
        if (!email(field.value)) {
          errors.push(validations.emailFormat.errorMessage);
        }
      }
      if (validations.curp) {
        if (!curp(field.value)) {
          errors.push(validations.curp.errorMessage);
        }
      }
      if (validations.minLength) {
        if (!minLength(validations.minLength.min)(field.value)) {
          errors.push(validations.minLength.errorMessage);
        }
      }
      if (validations.maxLength) {
        if (!maxLength(validations.maxLength.max)(field.value)) {
          errors.push(validations.maxLength.errorMessage);
        }
      }
      if (validations.minValue) {
        if (!minValue(validations.minValue.min)(field.value)) {
          errors.push(validations.minValue.errorMessage);
        }
      }
      if (validations.maxValue) {
        if (!maxValue(validations.maxValue.max)(field.value)) {
          errors.push(validations.maxValue.errorMessage);
        }
      }
      if (validations.match) {
        const matchingField = fields[validations.match.match];
        if (matchingField) {
          if (!match(matchingField.value)(field.value)) {
            errors.push(validations.match.errorMessage);
          }
        }
      }
      if (validations.string) {
        if (!string(field.value)) {
          errors.push(validations.string.errorMessage);
        }
      }
      if (validations.length) {
        if (!length(validations.length.length)(field.value)) {
          errors.push(validations.length.errorMessage);
        }
      }
      if (validations.numeric) {
        if (!numeric(field.value)) {
          errors.push(validations.numeric.errorMessage);
        }
      }
      if (validations.float) {
        if (!float(field.value)) {
          errors.push(validations.float.errorMessage);
        }
      }

      if (validations.required === undefined && field.value === '') {
        // Non required empty fields
        field.errors = [];
        field.valid = true;
      } else {
        let validate = true;
        if (validations.requiredIf) {
          const input = fields[validations.requiredIf.field];
          if (input) {
            validate = input.value === validations.requiredIf.equals;
          }
        }
        if (validate) {
          // Modify field
          field.errors = errors;
          field.valid = errors.length > 0 ? false : true;
        } else {
          // Non required empty fields bc of condition
          field.errors = [];
          field.valid = true;
        }
      }
    }
  };

  // First render doesn't have fields, so this is necesary
  if (Object.keys(fields).length === 0) {
    return <></>;
  }
  return props.children({
    fields,
    handleChange,
    handleSubmit,
    highlightRequired,
    valid,
  }) as ReactElement<any>;
};
export default Form;
