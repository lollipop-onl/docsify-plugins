export const msg = (message) => `[docsify-plugin-page-history] ${message}`;

export const parseHistory = (input) => {
  try {
    if (!input) return [];

    if (!Array.isArray(input)) {
      throw TypeError(msg('"history" must be an array'));
    }

    const intl = Intl.DateTimeFormat("en-US", { dateStyle: "medium" });

    return input
      .filter((item) => typeof item === "object" && item !== null)
      .map((item) => {
        return {
          date: item.date instanceof Date ? intl.format(item.date) : item.date,
          message: item.message,
        };
      });
  } catch (err) {
    console.error(err);

    return [];
  }
};
