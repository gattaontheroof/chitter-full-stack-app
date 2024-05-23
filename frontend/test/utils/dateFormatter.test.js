import formatDate from '../../src/utils/dateFormatter.js';

/*
Generated using Copilot
*/
describe('formatDate', () => {
  it('should return an object with correct date properties', () => {
    const date = new Date(2022, 0, 1, 13, 15); // January 1, 2022 13:15
    const result = formatDate(date);
    expect(result).toEqual({
      day: 1,
      dayOfWeek: 'Saturday',
      month: 1,
      monthName: 'January',
      shortMonthName: 'Jan',
      year: 2022,
      hour: 13,
      minutes: '15'
    });
  });

  it('should append 0 to minutes if less than 10', () => {
    const date = new Date(2022, 0, 1, 13, 5); // January 1, 2022 13:05
    const result = formatDate(date);
    expect(result.minutes).toEqual('05');
  });

  it('should handle leap years correctly', () => {
    const date = new Date(2020, 1, 29, 13, 15); // February 29, 2020 13:15
    const result = formatDate(date);
    expect(result).toEqual({
      day: 29,
      dayOfWeek: 'Saturday',
      month: 2,
      monthName: 'February',
      shortMonthName: 'Feb',
      year: 2020,
      hour: 13,
      minutes: '15'
    });
  });
});