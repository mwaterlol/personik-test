import SubmitIcon from '@/assets/icons/submit.svg?react';
import { PrimaryButton, Input } from '../UI';
import Helper from '@/utils/helper';
import useCityForm from '@/hooks/useCityForm';

type CityFormProps = {
    isDisabled: boolean;
    addCity: (_val: string) => void;
    usedCities: string[];
};
const CityForm = ({ isDisabled, addCity, usedCities }: CityFormProps) => {
    const { cityInputValue, isCityInputCorrect, handleCityInputChange, submitCity } = useCityForm({
        addCity,
        usedCities,
    });
    return (
        <form className="w-full container items-center p-1 relative" onSubmit={submitCity}>
            <PrimaryButton
                className="absolute top-1.5 right-1.5 p-0.375 rounded-md"
                disabled={isDisabled}
                type="submit"
            >
                <SubmitIcon />
            </PrimaryButton>
            <Input
                placeholder={Helper.getCityInputPlaceHolder({ isDisabled: isDisabled, usedCities: usedCities })}
                disabled={isDisabled}
                value={cityInputValue}
                onChange={handleCityInputChange}
                className={isCityInputCorrect ? '' : 'border border-red-500 text-red-500'}
            />
        </form>
    );
};

export default CityForm;
