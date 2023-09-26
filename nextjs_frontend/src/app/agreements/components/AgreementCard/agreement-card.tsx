import { AcordoIdentificado } from "@/models/Acordos";
import StatusBar from "../StatusBar/status-bar";
import Link from "next/link";
import { Devedor } from "@/models/Devedores";

interface AgreementCardProps {
  agreement: AcordoIdentificado;
  tenant: Devedor | null;
}

export default function AgreementCard({
  agreement,
  tenant,
}: AgreementCardProps) {
  return (
    <Link
      className="w-full cursor-pointer"
      href={`/agreements/${agreement.cpfDevedor}`}
    >
      <div className="p-5 flex flex-col rounded-xl text-sm bg-white hover:bg-gray-50">
        <span className="text-xl font-semibold mb-5">
          {agreement.nomeDevedor}
        </span>
        <span>
          <span className="font-semibold">CPF:</span>&nbsp;
          {agreement.cpfDevedor}
        </span>
        <span>
          <span className="font-semibold">Condomínio:&nbsp;</span>
          {agreement.nomeCondominio}
        </span>
        <span className="mb-5">
          <span className="font-semibold">Status:&nbsp;</span>
          {tenant?.mensalidadesAtrasadas
            ? `${tenant.mensalidadesAtrasadas} meses de atraso`
            : "-"}
        </span>
        <StatusBar status={agreement.status} />
      </div>
    </Link>
  );
}
