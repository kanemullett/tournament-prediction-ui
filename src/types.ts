enum Confederation {
    AFC,
    CAF,
    CONCACAF,
    CONMEBOL,
    OFC,
    UEFA
}

type Match = {
    id: string;
    kickoff?: Date;
    homeTeam?: Team;
    awayTeam?: Team;
    groupMatchDay: number,
    group?: Group,
    round?: Round
};

type Team = {
    id: string,
    name: string,
    imagePath: string,
    confederation: Confederation
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
