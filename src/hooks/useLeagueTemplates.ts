import { useQuery } from "@tanstack/react-query"
import { LeagueTemplate } from "../types"
import { getLeagueTemplates } from "../api/leagueTemplateApi.ts";

export const useLeagueTemplates = () => {
    return useQuery<LeagueTemplate[]>({
        queryKey: ["leagueTemplates"],
        queryFn: () => getLeagueTemplates()
    });
}
