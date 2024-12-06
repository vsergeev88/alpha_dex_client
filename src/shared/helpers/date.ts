export function getDateHuman(date: Date, locale: string = 'ru-RU'): string {
  return `${date.toLocaleDateString(locale)} ${date.toLocaleTimeString(locale)}`;
}
