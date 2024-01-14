export interface Project {
    id?:number;
    titre:string;
    image:string;
    description:string;
    progress:number;
    type:string;
    date_debut:string;
    date_fin:string;
    team_id?:number;
}