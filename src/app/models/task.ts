export interface Task {
    id?:number;
    titre:string;
    description:string;
    status:string;
    progress:string;
    date_debut:string;
    date_fin:string;
    respo?:string;
    respo_id?:number;
    project_id?:number;
}