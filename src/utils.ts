import { DateTime } from 'luxon';

export const now = (): DateTime => DateTime.utc().set({ millisecond: 0 });

export function toSQLDate(datetime: DateTime): string;
export function toSQLDate(datetime: null): null;
export function toSQLDate(datetime: undefined): undefined;
export function toSQLDate(datetime: DateTime | null | undefined): string | null | undefined {
  return datetime ? datetime.setZone('Europe/Rome').toSQL({ includeOffset: false }) : datetime;
}

export function fromSQLDate(sqlDate: string): DateTime;
export function fromSQLDate(sqlDate: null): null;
export function fromSQLDate(sqlDate: string | null): DateTime | null {
  if (!sqlDate) return null;
  const d = DateTime.fromSQL(sqlDate, { zone: 'Europe/Rome' }).setZone('Europe/Rome');
  return d.isValid ? d : null;
}

export const removeUndefined = (obj: any) => {
  Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key]);
  return obj;
};
