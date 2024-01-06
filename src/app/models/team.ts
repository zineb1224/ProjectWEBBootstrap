export interface Team {
    id?:number;
    nom:string;
    icon:string;
    nbr_member:number;
    leader?:number;
    members?:[{member_id:number}];
}