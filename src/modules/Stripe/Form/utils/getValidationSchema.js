import * as Yup from 'yup';
import { isValidPhoneNumber } from 'react-phone-number-input';

export const getValidationSchema = (strings) =>
  Yup.object().shape({
    firstName: Yup.string().required(strings.WE_NEED_YOUR_FIRST_NAME),
    lastName: Yup.string().required(strings.WE_NEED_YOUR_LAST_NAME),
    email: Yup.string()
      .email(strings.YOUR_EMAIL_DOESNT_LOOK_RIGHT)
      .required(strings.WE_NEED_YOUR_EMAIL),
    phone: Yup.string()
      .test(
        'isValidPhoneNumber',
        strings.YOUR_MOBILE_NUMBER_DOESNT_LOOK_RIGHT,
        isValidPhoneNumber
      )
      .required(strings.WE_NEED_YOUR_MOBILE_NUMBER),
    legal: Yup.bool().oneOf(
      [true],
      strings.WE_NEED_YOU_TO_AGREE_WITH_OUR_TERMS
    ),
  });
