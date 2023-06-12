import dayjs from 'dayjs';
import jalaliDay from 'jalaliday';
import utc from 'dayjs/plugin/utc';
import isToday from 'dayjs/plugin/isToday';
import calendar from 'dayjs/plugin/calendar';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(utc);
dayjs.extend(isToday);
dayjs.extend(calendar);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(jalaliDay);

dayjs.locale('fa');
dayjs.calendar('jalali');

export default ({ app, req }, inject) => {
  inject('dayjs', dayjs);
};
