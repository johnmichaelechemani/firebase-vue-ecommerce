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