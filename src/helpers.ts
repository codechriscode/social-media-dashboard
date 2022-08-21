import { SocialNetworkNames, socialNetworks } from "./store/socialNetworks";

export function roundNum(value: number): string {
  let sign = "";
  if (value < 0) sign = "-";
  if (value <= 9999) {
    return value.toString();
  } else if (value <= 999999) {
    return sign + `${Math.trunc(value / 1000)}k`;
  } else if (value <= 999999999) {
    return sign + `${Math.trunc(value / 1000000)}M`;
  } else if (value > 999999999) {
    return sign + `${Math.trunc(value / 1000000000)}B`;
  }
  return value.toString();
}

export function getColor(value: number) {
  if (value > 0) {
    return "--change-positive";
  } else if (value < 0) {
    return "--change-negative";
  }
  return "";
}

export function getArrowName(value: number) {
  if (value > 0) {
    return "up";
  } else if (value < 0) {
    return "down";
  }
  return "";
}

export function calcPeriod(days: number): string {
  if (days > 0) {
    // Calculate today - days
    return `Last ${days} days`;
  }
  return "Today";
}

export function commaSeparate(num: number) {
  const parts = num.toString().split(".");
  const numberPart = parts[0];
  const decimalPart = parts[1];
  const thousands = /\B(?=(\d{3})+(?!\d))/g;
  return (
    numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "")
  );
}

export function plusOrMinus() {
  return Math.trunc(Math.random() * 10) % 2 ? -1 : 1;
}

export const generateMockProfile = (
  networkName: SocialNetworkNames,
  username: string
) => {
  const networkParams = socialNetworks[networkName];
  const cnxID = `${Math.trunc(Math.random() * 10000000000)}`;
  const newEntry = {
    [cnxID]: {
      socialNetwork: networkName,
      username: username,
      status: {
        value: Math.trunc(Math.random() * 1500000),
        unit: networkParams.metrics.main,
        change: Math.trunc(Math.random() * 1500 * plusOrMinus()),
      },
      other_status: [
        {
          unit: networkParams.metrics.other[0],
          value: Math.trunc(Math.random() * 15000),
          change_pc: Math.trunc(Math.random() * 100 * plusOrMinus()),
        },
        {
          unit: networkParams.metrics.other[1],
          value: Math.trunc(Math.random() * 15000),
          change_pc: Math.trunc(Math.random() * 100 * plusOrMinus()),
        },
      ],
    },
  };
  return newEntry;
};
