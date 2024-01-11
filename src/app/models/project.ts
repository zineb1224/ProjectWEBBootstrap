export interface Project {
    id?:number;
    titre:string;
    image:string;
    description:string;
    progress:number;
    type:string;
    date_debut:Date;
    date_fin:Date;
    team_id?:number;
}