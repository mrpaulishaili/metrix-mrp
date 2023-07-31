function calculateOrderVolume(data: Product[]): number {
  let totalVolume = 0;

  data.forEach((item) => {
    totalVolume += item.qty;
  });

  return totalVolume;
}

export default calculateOrderVolume;
