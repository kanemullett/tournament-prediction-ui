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
