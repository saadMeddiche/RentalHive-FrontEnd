export interface Stock{

    id: number;
    registrationNumber: string;
    equipment:{
        id: number;
        name: string;
    };
    status:{
        id: number;
        name: string;
    }


}
