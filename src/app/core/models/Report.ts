import { Reporter } from "./Reporter";
import { Victim } from "./Victim";

export interface Report{
    id?:number;
    subject?:string;
    description?:string;
    category:string;
    eventDate?:Date;
    eventTime?:string;
    anonymity:boolean;
    suburb?:string;
    state?:string;
    city?:string;
    evidence?:string;
    url1?:string;
    url2?:string;
    url3?:string;
    origin?:string;
    establishmentName?:string;
    establishmentAddress?:string;
    previousReported?:string;
    previousReportedWhere?:string;
    previousReportedTo?:string;
    reporter:Reporter;
    victim:Victim;
}

