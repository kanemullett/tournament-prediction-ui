import { useQuery } from "@tanstack/react-query"
import { getTeams } from "../api/teamApi.ts"

export const useTeams = (tournamentId: string | null, confederation: Confederation | null) => {
    return useQuery<Team[]>({
        queryKey: ["teams", tournamentId, confederation],
        queryFn: () => getTeams(tournamentId, confederation)
    })
}