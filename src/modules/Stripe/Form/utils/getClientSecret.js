export const getClientSecret = async (priceId, couponId) => {
  const clientSecret = await window
    .fetch(
      'https://mrazu50nsj.execute-api.us-east-1.amazonaws.com/dev/createPaymentIntent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId, couponId }),
      }
    )
    .then((res) => {
      return res.json();
    })
    .then((data) => data.clientSecret);

  return clientSecret || (await getClientSecret(priceId, couponId));
};
