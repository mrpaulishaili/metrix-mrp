function countItemsWithStatus(data: Product[], status: string): number {
  return data.filter(
    (item) => item.status.toLowerCase() === status.toLowerCase()
  ).length;
}

export default countItemsWithStatus;
