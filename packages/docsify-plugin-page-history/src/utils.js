export const msg = (message) => `[docsify-plugin-page-history] ${message}`;

const zeroPad = (num) => {
  return num.toString().padStart(2, "0");
};

export const formatDate = (date) => {
  if (date instanceof Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${zeroPad(month)}-${zeroPad(day)}`;
  }

  return date;
};

export const parseHistory = (input) => {
  try {
    if (!input) return [];

    if (!Array.isArray(input)) {
      throw TypeError(msg('"history" must be an array'));
    }

    return input
      .filter((item) => typeof item === "object" && item !== null)
      .map((item) => {
        return {
          date: formatDate(item.date),
          message: item.message,
        };
      });
  } catch (err) {
    console.error(err);

    return [];
  }
};
