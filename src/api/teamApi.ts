import apiClient from "./apiClient.ts";

export const getTeams = async (tournamentId: string | null, confederation: Confederation | null): Promise<Team[]> => {
    let route = `/teams`

    const queryParams: string[] = [];

    if (tournamentId != null) {
        queryParams.push(`tournament_id=${tournamentId}`)
    }

    if (confederation != null) {
        queryParams.push(`confederatio=${confederation}`)
    }

    if (queryParams.length > 0) {
        route = `${route}?${queryParams.join("&")}`
    }

    const { data } = await apiClient.get(route, {
        headers: {
            "auth-username": "kanemullett",
        }
    });

    return data;
}