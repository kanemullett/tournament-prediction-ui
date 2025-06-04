enum Confederation {
    AFC,
    CAF,
    CONCACAF,
    CONMEBOL,
    OFC,
    UEFA
}

type Tournament = {
    id: string;
    name: string;
    year: number;
    confederation?: Confederation;
    templateId: string;
}

type Match = {
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
