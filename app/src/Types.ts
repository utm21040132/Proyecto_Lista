export interface IMetric {
  description: string;
  max_points: number;
}

//Revisar como funciona este codigo (reminder)

export interface IEvent {
  title: string;
  maxRound: number;
  metrics: IMetric[];
}

export interface IUser {
  name: String;
  email: String;
  CURP: String;
  password: String;
  rol: String;
}


export interface IGrade {
  metricID:String;
  grade:number;
  judgeID:String;
}

export interface IGrades {
  groupID:String;
  round:number;
  eventID:String;
  grade:IGrade[];
}

export interface IGroup {
  name: String;
  participantsID: String[];
  leader: String;
  round: number;
  grades: IGrades[];
}