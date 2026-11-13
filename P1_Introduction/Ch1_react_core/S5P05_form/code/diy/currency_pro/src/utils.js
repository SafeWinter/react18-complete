const [USD2RMB_RATE, RMB2USD_RATE] = [7.3255, 0.1365]; // 2022-11-01
// const [USD2RMB_RATE, RMB2USD_RATE] = [6.6708, 0.1499]; // 2026-11-10

export const usd2Rmb = (usd) => usd * USD2RMB_RATE;

export const rmb2Usd = (rmb) => rmb * RMB2USD_RATE;

export const tryConvert = (money, convert) => {
  const input = parseFloat(money);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert.call(null, input);
  const rounded = Math.round(output * 10_000) / 10_000;
  return rounded.toFixed(4);
};
