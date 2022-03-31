export const validateHairColour: (value?: string[]) => string | undefined = (value) =>
  value?.length ? undefined : 'Please select at least one hair colour of alpaca';
export const validateMultiplePets: (value?: string) => string | undefined = (value) =>
  value ? undefined : 'Please let us know if you have children coming with you';
export const validateFirstName: (value?: string) => string | undefined = (value) =>
  value ? undefined : 'Please enter a first name';
export const validateDescription: (value?: string) => string | undefined = (value) =>
  value ? undefined : 'Please enter a description';
export const validateDateOfAppointment: (value?: {
  year?: number | string;
  month?: number | string;
  day?: number | string;
}) => string | undefined = (value) => {
  if (value && value.year && value.month && value.day) {
    const year = Number(value.year);
    const month = Number(value.month) - 1;
    const day = Number(value.day);
    const testDate = new Date(year, month, day);
    if (testDate <= new Date()) {
      return 'Please enter a date in the future';
    } 
    else if (
      // Is after 1900
      testDate.getFullYear() > 1900 &&
      // and a real date resolves to the inputted date (e.g. month is not 13, not 29th February on a non leap year)
      testDate.getFullYear() === year &&
      testDate.getMonth() === month &&
      testDate.getDate() === day
    ) {
      return undefined;
    }
  }
  return 'Please enter a date of appointment';
};
export const validateTimeslot: (value?: string) => string | undefined = (value) =>
  value ? undefined : 'Please select an timeslot';