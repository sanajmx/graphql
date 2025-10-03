import { useQuery } from "@apollo/client"; 
import { GET_USER_INFO, auditRatio, GET_PROGRESS, GET_SKILLS, GET_XP_PER_PROJECT } from "@/queries/queries";

export function useUser(){
    return useQuery(GET_USER_INFO);
}



export function useProgress(userId?: number){
    return useQuery(GET_PROGRESS, {
        variables: { userId },
        skip: !userId
    });
}



export function useAudit(){
    return useQuery(auditRatio);
}

export function useSkills(){
    return useQuery(GET_SKILLS);
}

export function useXP(){
    return useQuery(GET_XP_PER_PROJECT)
}


