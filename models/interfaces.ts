
export interface Progress {
  id: number;
  grade: number | null;
  object: {
    name: string;
    type: string;
  };
}

export interface User {
  id: number; 
  login: string; 
  firstName: string;
  lastName: string;
}



export interface AuditUser {
 auditRatio : number; 
 totalUp: number;
 totalDown: number; 
}


export interface SkillTransaction {
  amount: number;
  type: string; 
}

export interface XPTransaction {
  amount: number; 
  object: {
    name: string
  }
}
