export interface Task {
    id?:number;
    titre:string;
    description:string;
    status:string;
    progress:string;
    date_debut:Date;
    date_fin:Date;
    member_id?:number;
    project_id?:number;
}