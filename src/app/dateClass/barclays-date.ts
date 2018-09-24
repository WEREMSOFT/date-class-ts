export class BarclaysDate {

    private constructor(public year: number, public month: number, public day: number) {
    }

    public static getNewInstance(year: number, month: number, day: number): BarclaysDate {
        return new BarclaysDate(year, month, day);
    }

    public toString(): string {
        return 'cadorna';
    }
}

export enum Months {
    JANYARY = 0,
    FEBRUARY = 1,
    MARCH = 2,
    APRIL = 3,
    MAY = 4,
    JUN = 5,
    JULY = 6,
    AUGUST = 7,
    SEPTEMBER = 8,
    OCTOBER = 9,
    NOVEMBER = 10,
    DECEMBER = 11
}
