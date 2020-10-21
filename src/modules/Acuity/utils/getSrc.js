import { getBookingLink } from './getBookingLink';

export const getSrc = (
  languageCode,
  responseId,
  isIndividual,
  { firstName, lastName, email, certificate }
) => {
  const {
    appointmentTypeCouple,
    appointmentTypeIndividual,
    bookingLinkFieldName,
    bookingLinkAppointmentTypeIndividual,
    idFieldName,
    owner,
  } = languageCode.includes('es')
    ? // Spanish
      {
        appointmentTypeCouple: 16266387,
        appointmentTypeIndividual: 16738020,
        bookingLinkAppointmentTypeIndividual: 17676826,
        bookingLinkFieldName: 'field:8634468',
        idFieldName: 'field:8295360',
        owner: 20408348,
      }
    : // English
      {
        appointmentTypeCouple: 16735191,
        appointmentTypeIndividual: 15473079,
        bookingLinkAppointmentTypeIndividual: 17676776,
        bookingLinkFieldName: 'field:8634463',
        idFieldName: 'field:8295421',
        owner: 20088051,
      };

  return [
    'https://app.acuityscheduling.com/schedule.php',
    `?owner=${owner}`,
    `&appointmentType=${
      isIndividual ? appointmentTypeIndividual : appointmentTypeCouple
    }`,
    `&${idFieldName}=${responseId}`,
    `&${bookingLinkFieldName}=${getBookingLink({
      owner,
      appointmentType: bookingLinkAppointmentTypeIndividual,
      certificate,
      firstName,
      lastName,
      email,
    })}`,
    `&certificate=${certificate}`,
    `&firstName=${firstName}`,
    `&lastName=${lastName}`,
    `&email=${email}`,
  ].join('');
};
