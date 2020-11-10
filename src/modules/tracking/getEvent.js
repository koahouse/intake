import {
  INTAKE_FORM_COMPLETE,
  PAYMENT_COMPLETE,
  BOOKING_COMPLETE,
} from './constants';

export const getEvent = (name, data = {}, languageCode) => {
  switch (name) {
    case INTAKE_FORM_COMPLETE:
    case BOOKING_COMPLETE:
      return { event: name };
    case PAYMENT_COMPLETE:
      return {
        ecommerce: {
          purchase: {
            actionField: {
              id: data.id,
              revenue: data.value,
            },
            products: [
              {
                name: 'Matching session',
                variant: languageCode,
              },
            ],
          },
        },
      };
  }
};
