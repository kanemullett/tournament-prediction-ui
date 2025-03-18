import { useQuery } from "@tanstack/react-query"
import { getMatches } from "../api/matchApi.ts"

export const useMatches = (tournamentId: string, groupId: string | null, groupMatchDay: number | null, roundId: string | null) => {
    return useQuery<Match[]>({
        queryKey: ["matches", tournamentId], 
        queryFn: () => getMatches(tournamentId, groupId, groupMatchDay, roundId)
    });
}
