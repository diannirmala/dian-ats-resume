/**
 * Formats a date range string for display.
 * Returns "StartDate – Present" if current, otherwise "StartDate – EndDate".
 */
export function formatDateRange(
  startDate: string,
  endDate: string,
  current: boolean
): string {
  return current ? `${startDate} – Present` : `${startDate} – ${endDate}`;
}

/**
 * Joins an array of strings into a comma-separated list.
 */
export function joinList(items: string[], separator = ", "): string {
  return items.join(separator);
}
