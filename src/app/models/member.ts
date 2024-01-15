export interface Member{
    id?:number;
    nom:string;
    email:string;
    password?:string;
    telephone:string;
    date_naissance:string;
    sexe?:string;
    cin:string;
    description:string;
    photo_profile?:string;
    skills?:[
        {skill_id:number; skill_title:string; skill_icon: string}
    ];
    certificats?:[{
        certificat_id:number;
        certificat_etablissement_logo:string;
        certificat_name:string;
        certificat_etablissement:string;
    }];
}