export interface Team {
    id?:number;
    nom:string;
    icon:string;
    goalTeam:string;
    nbr_member:number;
    leader?:number;
    members?:[{member_id:number}];
}