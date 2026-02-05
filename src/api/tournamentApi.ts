import apiClient from "./apiClient.ts"

export const getTournamentById = async (tournamentId: string): Promise<Tournament> => {
    let route = `/tournaments/${tournamentId}`;
    
    const { data } = await apiClient.get(route, {
        headers: {
            "auth-username": "kanemullett",
        }
    });

    return data;
}

export const createTournaments = async (tournaments: Tournament[]): Promise<Tournament[]> => {
    let route = `/tournaments`;

    const { data } = await apiClient.post(
        route,
        JSON.stringify(tournaments),
        {
            headers: {
                "auth-username": "kanemullett"
            }
        }
    );

    return data;
}
