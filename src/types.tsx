export enum Confederation {
    AFC = "AFC",
    CAF = "CAF",
    CONCACAF = "CONCACAF",
    CONMEBOL = "CONMEBOL",
    OFC = "OFC",
    UEFA = "UEFA"
};

export type Match = {
    id: string;
    kickoff?: Date;
    homeTeam?: Team;
    awayTeam?: Team;
    groupMatchDay: number;
    group?: Group;
    round?: Round;
    prediction?: MatchOutcome;
    result?: MatchOutcome;
    points?: 0 | 1 | 3
};

export type LeagueTemplate = {
    id?: string;
    name: string;
    groupCount: number;
    teamsPerGroup: number;
    homeAndAway: boolean;
};

export type Tournament = {
    id?: string;
    name: string;
    year: number;
    confederation?: Confederation | null;
    templateId?: string;
};

type Team = {
    id: string;
    name: string;
    imagePath: string;
    confederation: Confederation;
};

type Group = {
    id: string;
    name: string;
}

type Round = {
    id: string;
    name: string;
    teamCount: number;
    roundOrder: number;
    twoLegs: boolean;
    extraTime: boolean;
    awayGoals: boolean;
}

type MatchOutcome = {
    homeGoals: number;
    awayGoals: number;
    afterExtraTime: boolean;
    afterPenalties: boolean;
    penaltiesWinner?: Winner;
}

enum Winner {
    HOME,
    AWAY
}
