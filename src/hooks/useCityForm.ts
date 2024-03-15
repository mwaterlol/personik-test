import Helper from '@/utils/helper';
import { useState } from 'react';
import { toast } from 'react-toastify';

type UseCityInputProps = {
    addCity: (_val: string) => void;
    usedCities: string[];
};

const useCityForm = ({ addCity, usedCities }: UseCityInputProps) => {
    const [cityInputValue, setCityInputValue] = useState('');
    const [isCityInputCorrect, setIsCityInputCorrect] = useState(true);
    const handleCityInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCityInputValue(event.target.value);
    };
    const submitCity = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const capitalizedValue = cityInputValue.charAt(0).toUpperCase() + cityInputValue.slice(1);
        const cityInputValidationVerdict = Helper.validateCity({ cityValue: capitalizedValue, usedCities: usedCities });
        if (!cityInputValidationVerdict.verdict) {
            toast.error(cityInputValidationVerdict.message);
            setIsCityInputCorrect(false);
            return;
        }
        setIsCityInputCorrect(true);
        addCity(capitalizedValue);
        setCityInputValue('');
    };
    return {
        cityInputValue,
        isCityInputCorrect,
        handleCityInputChange,
        submitCity,
    };
};

export default useCityForm;
