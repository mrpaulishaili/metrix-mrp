function calculateSalesTotal(data: Product[]): number {
  let totalSales = 0;

  data.forEach((item) => {
    totalSales += item.price * item.qty;
  });

  return totalSales;
}

export default calculateSalesTotal;
