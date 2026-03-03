export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const parseDate = (dateString: string): Date => {
  return new Date(dateString);
};

export const getDateRange = (startDate: Date, endDate: Date) => {
  return {
    gte: new Date(startDate.setHours(0, 0, 0, 0)),
    lte: new Date(endDate.setHours(23, 59, 59, 999)),
  };
};

export const getTodayRange = () => {
  const today = new Date();
  return {
    gte: new Date(today.setHours(0, 0, 0, 0)),
    lte: new Date(today.setHours(23, 59, 59, 999)),
  };
};
