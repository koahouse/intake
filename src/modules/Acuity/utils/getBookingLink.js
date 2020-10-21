export const getBookingLink = ({
  owner,
  appointmentType,
  certificate,
  firstName,
  lastName,
  email,
}) =>
  window.encodeURIComponent(
    [
      `https://app.acuityscheduling.com/schedule.php`,
      `?owner=${owner}`,
      `&appointmentType=${appointmentType}`,
      `&certificate=${certificate}`,
      `&firstName=${firstName}`,
      `&lastName=${lastName}`,
      `&email=${email}`,
    ].join('')
  );
