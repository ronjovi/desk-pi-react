const handleHours = (hours: number) => {
  if (hours > 12) return hours - 12;
  return hours;
};

const zeroPadding = (num: number, digit: number) => {
  let zero = '';
  for (let i = 0; i < digit; i += 1) {
    zero += '0';
  }
  return (zero + num).slice(-digit);
};

export default function GetTimeStr() {
  const cd = new Date();
  const time = `${zeroPadding(handleHours(cd.getHours()), 2)}:${zeroPadding(
    cd.getMinutes(),
    2
  )}:${zeroPadding(cd.getSeconds(), 2)}`;

  return time;
}
