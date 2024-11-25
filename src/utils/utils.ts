export const CalculateReadingTime = (
  startDate: number,
  endDate: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any
) => {
  const duration = endDate - startDate;

  const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

  const readingTime =
    duration < 1000 * 60
      ? `< 1 ${t("minutes")}`
      : `${days ? `${days} ${t("days")}, ` : ""}${
          hours ? `${hours} ${t("hours")}, ` : ""
        }${minutes} ${t("minutes")}`;

  return readingTime;
};

export const CalculateReadingPages = (startPage: number, endPage: number) => {
  const pagesDone = endPage - startPage === 0 ? 1 : endPage - startPage + 1;

  const pages = endPage ? pagesDone : null;
  return { pages, pagesDone };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GetCurrentDate = (startDate: any) => {
  const currentDate = startDate.toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return currentDate;
};
