import allCities from '@/mock/cities.json';

class Helper {
    static getRandomSeconds = () => {
        return Math.floor(Math.random() * 111) + 10;
    };

    static getFirstLetterOfNextCity = (usedCities: string[]) => {
        if (!usedCities.length) {
            return '';
        }
        const lastLetter = usedCities[usedCities.length - 1].slice(-1).toLowerCase();
        if (lastLetter === 'ъ' || lastLetter === 'ь') {
            return usedCities[usedCities.length - 1].slice(-2, -1).toLowerCase();
        }
        return lastLetter;
    };

    static getCityInputPlaceHolder = ({ isDisabled, usedCities }: { isDisabled: boolean; usedCities: string[] }) => {
        if (isDisabled) return 'Ожидаем ответа соперника...';
        if (usedCities.length === 0) return 'Напишите любой город, например: Где вы живете?';
        return `Знаете город на букву “${this.getFirstLetterOfNextCity(usedCities).toUpperCase()}”?`;
    };

    static filterCities = (usedCities: string[]) => {
        const firstLetterOfNewCity = this.getFirstLetterOfNextCity(usedCities);
        return allCities.filter((city) => !usedCities.includes(city) && city[0].toLowerCase() === firstLetterOfNewCity);
    };

    static getRandomElement = <T>(array: T[]): T | undefined => {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    };

    static getCityByLetter = (usedCities: string[]): Promise<string> => {
        return new Promise((resolve, reject) => {
            const randomSeconds = this.getRandomSeconds();
            const availableCities = this.filterCities(usedCities);
            const randomCity = this.getRandomElement(availableCities);
            if (randomCity) {
                setTimeout(() => {
                    resolve(randomCity);
                }, randomSeconds * 1000);
            } else {
                reject();
            }
        });
    };

    static validateCity = ({ cityValue, usedCities }: { cityValue: string; usedCities: string[] }) => {
        const result = { verdict: true, message: '' };
        if (!cityValue) {
            result.message = 'Введите название города';
            result.verdict = false;
            return result;
        }
        if (!allCities.includes(cityValue)) {
            result.message = 'Такого города не существует';
            result.verdict = false;
            return result;
        }

        const nextCityFirstLetter = this.getFirstLetterOfNextCity(usedCities);
        if (nextCityFirstLetter !== cityValue[0].toLowerCase() && usedCities.length) {
            result.message = 'Город должен начинаться с той же буквы, что и предыдущий';
            result.verdict = false;
            return result;
        }

        if (usedCities.includes(cityValue)) {
            result.message = 'Город уже был использован';
            result.verdict = false;
            return result;
        }
        return result;
    };
}

export default Helper;
