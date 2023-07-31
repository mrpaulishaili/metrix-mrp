function formatCurrency(
  amount: number,
  currencyCode: string,
  locale: string
): string {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  });

  return formatter.format(amount);
}

export default formatCurrency;
