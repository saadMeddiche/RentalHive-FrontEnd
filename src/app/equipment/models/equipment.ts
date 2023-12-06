export interface Equipment{
    id : number | undefined;
    name : string;
    price_per_day : number;
    category : {
        id: number | undefined;
        name : string;
    };
}
