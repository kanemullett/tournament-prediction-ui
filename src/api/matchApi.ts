import apiClient from "./apiClient.ts"

export const getMatches = async (tournamentId: string, groupId: string | null, groupMatchDay: number | null, roundId: string | null): Promise<Match[]> => {
    let route = `/tournaments/${tournamentId}/matches`;
    
    const queryParams: string[] = [];

    if (groupId != null) {
        queryParams.push(`group_id=${groupId}`)
    }

    if (queryParams.length > 0) {
        route = `${route}?${queryParams.join("&")}`
    }

    const { data } = await apiClient.get(route);

    return data;
}
