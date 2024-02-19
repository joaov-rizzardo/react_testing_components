import { useListaParticipantes } from "../state/hooks/useListaParticipantes";

const ListaParticipantes = () => {
  const participantes: string[] = useListaParticipantes();
  return (
    <ul>
      {participantes.map((participante) => (
        <li key={participante}>{participante}</li>
      ))}
    </ul>
  );
};

export default ListaParticipantes;
