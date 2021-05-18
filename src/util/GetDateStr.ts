const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const zeroPadding = (num: number, digit: number) => {
  let zero = '';
  for (let i = 0; i < digit; i += 1) {
    zero += '0';
  }
  return (zero + num).slice(-digit);
};

export default function GetDateStr() {
  const cd = new Date();
  const date = `${zeroPadding(cd.getFullYear(), 4)}-${zeroPadding(
    cd.getMonth() + 1,
    2
  )}-${zeroPadding(cd.getDate(), 2)} ${week[cd.getDay()]}`;

  return date;
}
