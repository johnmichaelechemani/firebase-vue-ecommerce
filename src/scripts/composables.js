export const formatPrice = (value) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  })
    .format(value)
    .replace("$", "");
};

export const formatSoldNumber = (value) => {
  if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1) + "M";
  } else if (value >= 1_000) {
    return (value / 1_000).toFixed(1) + "k";
  }
  return value;
};

export const Time = (timestamp) => {
  if (timestamp) {
    const date = new Date(timestamp.seconds * 1000);
    const now = new Date();

    const hours = date.getHours() % 12 || 12;
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const period = date.getHours() < 12 ? "am" : "pm";
    const time = `${hours}:${minutes} ${period}`;
    if (date.toDateString() === now.toDateString()) {
      return time;
    }
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    if (date.toDateString() === yesterday.toDateString()) {
      return `Yesterday ${time}`;
    }
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayName = days[date.getDay()];

    const lastWeek = new Date(now);
    lastWeek.setDate(lastWeek.getDate() - 7);
    if (date > lastWeek) {
      return `${dayName} ${time}`;
    }
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    return `${month} ${day} ${time}`;
  }
  return "";
};
