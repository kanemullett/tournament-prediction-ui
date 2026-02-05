import { useMutation } from "@tanstack/react-query"
import { createTournaments } from "../api/tournamentApi.ts";

export const useCreateTournament = () => {
  return useMutation({
    mutationFn: async (tournament: Tournament): Promise<Tournament> => {
      const response = await createTournaments([tournament]);
      return response[0];
    },
  });
};