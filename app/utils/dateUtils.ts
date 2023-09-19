import { getMonth, getYear } from "date-fns";

export const getCurrentSeasonAndYear: () => string = () => {
    const currentMonth = getMonth(new Date());
    const currentYear = getYear(new Date());

    if (currentMonth >= 3 && currentMonth <= 5) {
        return "Spring" + currentYear;
    } else if (currentMonth >= 6 && currentMonth <= 8) {
        return "Summer" + currentYear;
    } else if (currentMonth >= 9 && currentMonth <= 11) {
        return "Fall" + currentYear;
    } else {
        return "Winter" + currentYear;
    }
};
