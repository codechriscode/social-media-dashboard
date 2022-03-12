export function roundNum(value: number): number | string {
  let sign = "";
  if (value < 0) sign = "-";
  if (value <= 9999) {
    return value;
  } else if (value <= 999999) {
    return sign + `${Math.trunc(value / 1000)}k`;
  } else if (value <= 999999999) {
    return sign + `${Math.trunc(value / 1000000)}M`;
  } else if (value > 999999999) {
    return sign + `${Math.trunc(value / 1000000000)}B`;
  }
  return value;
}

export function getColor(value: number) {
  if (value > 0) {
    return "green";
  } else if (value < 0) {
    return "red";
  }
  return "";
}

export function getIconName(value: number) {
  if(value > 0) {
    return "up";
  } else if (value < 0) {
    return "down"
  }
  return "";
}

export function calcPeriod(days: number): string {
  if(days > 0) {
    // Calculate today - days
    return "Today"
  }
  return "Today"
}
