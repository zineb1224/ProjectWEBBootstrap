export interface Team {
    id?:number;
    nom:string;
    icon:string;
    goalTeam:string;
    nbr_member:number;
    leader_name?:string;
    members?:[{member_id:number}];
}