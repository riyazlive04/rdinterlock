/**
 * Get the start and end dates for a week (Monday to Sunday)
 */
export function getWeekRange(date: Date): { weekStart: Date; weekEnd: Date } {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday

  const weekStart = new Date(d.setDate(diff));
  weekStart.setHours(0, 0, 0, 0);

  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  weekEnd.setHours(23, 59, 59, 999);

  return { weekStart, weekEnd };
}

/**
 * Get the start and end dates for a month
 */
export function getMonthRange(
  month: number,
  year: number
): { monthStart: Date; monthEnd: Date } {
  const monthStart = new Date(year, month - 1, 1);
  monthStart.setHours(0, 0, 0, 0);

  const monthEnd = new Date(year, month, 0); // Last day of the month
  monthEnd.setHours(23, 59, 59, 999);

  return { monthStart, monthEnd };
}

/**
 * Get current week number in the year
 */
export function getWeekNumber(date: Date): number {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

/**
 * Format date range for display
 */
export function formatDateRange(start: Date, end: Date): string {
  return `${start.toISOString().split('T')[0]} to ${
    end.toISOString().split('T')[0]
  }`;
}
