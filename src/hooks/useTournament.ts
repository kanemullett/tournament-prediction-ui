import { useQuery } from "@tanstack/react-query"
import { getTournamentById } from "../api/tournamentApi.ts";

export const useTournament = (tournamentId: string) => {
    return useQuery<Tournament>({
        queryKey: ["tournament", tournamentId], 
        queryFn: () => getTournamentById(tournamentId)
    });
}
