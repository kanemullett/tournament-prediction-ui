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
    kickoff: Date;
    homeTeam: Team;
    awayTeam: Team;
    groupMatchDay: number,
    groupId: string,
    roundId: string
};

type Team = {
    id: string,
    name: string,
    imagePath: string,
    confederation: Confederation
};
