export const getContactDetails = (response) =>
  Object.entries(
    response.find(function (item) {
      return item.id === 828908;
    }).answer
  ).reduce((accumulator, [key, value]) => {
    switch (true) {
      case /(First|Nom|Nombre)/.test(key):
        return { ...accumulator, firstName: value };
      case /(Last|Cognom|Apellido)/.test(key):
        return { ...accumulator, lastName: value };
      case /(Email|Correu)/.test(key):
        return { ...accumulator, email: value };
      default:
        return accumulator;
    }
  }, {});
