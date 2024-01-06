export interface Member{
    id?:number;
    nom:string;
    email:string;
    password?:string;
    telephone:string;
    date_naissance:Date;
    sexe?:string;
    cin:string;
    photo_profile?:string;
    skills?:[{skill_id:number}];
}