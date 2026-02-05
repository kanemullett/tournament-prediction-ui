import apiClient from "./apiClient.ts";

export const getLeagueTemplates = async () => {
    let route = "/league-templates";

    const { data } = await apiClient.get(route, {
        headers: {
            "auth-username": "kanemullett",
        }
    });

    return data;
}
