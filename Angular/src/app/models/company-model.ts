import { Sector } from './sector';

export class CompanyModel {

    id: number;
	name: String;
    ceo: String;
    brief: String;
    code: String;
    sector: Sector[];
    boardOfDirectors: String[];
    stockExchangesId: number[];
}
