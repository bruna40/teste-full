export interface IFilter {
    value: string;
    order: number;
    setValue: React.Dispatch<React.SetStateAction<string>>
}