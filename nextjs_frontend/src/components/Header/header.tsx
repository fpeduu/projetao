"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useSideBarContext } from "@/contexts/SideBarContext";
import NotificationFlyMenu from "../NotificationFlyMenu/notification-fly-menu";
import { Notification } from "../NotificationFlyMenu/notification-fly-menu";

const notifications: Notification[] = [
  {
    type: "Sucesso",
    tenantName: "João da Silva",
    condominiumName: "Condomínio do João",
    message: "O acordo foi finalizado e falta apenas fazer o dowload"
  },
  {
    type: "Erro",
    tenantName: "João da Silva",
    condominiumName: "Condomínio do João",
    message: "O acordo não foi realizado com sucesso!"
  },
  {
    type: "Aviso",
    tenantName: "João da Silva",
    condominiumName: "Condomínio do João",
    message: "O acordo foi realizado com sucesso!"
  },
  {
    type: "Informação",
    tenantName: "João da Silva",
    condominiumName: "Condomínio do João",
    message: "O acordo foi realizado com sucesso!"
  },
  {
    type: "Sucesso",
    tenantName: "Maria da Silva",
    condominiumName: "Condomínio da Maria",
    message: "O acordo foi finalizado e falta apenas fazer o dowload"
  },
  {
    type: "Erro",
    tenantName: "Maria da Silva",
    condominiumName: "Condomínio da Maria",
    message: "O acordo não foi realizado com sucesso!"
  }
];

export default function Header() {
  const { hideSideBar, setHideSideBar } = useSideBarContext();
  const { data: session } = useSession();

  function handleLogin() {
    signIn(undefined, {
      callbackUrl: "/tenants/"
    });
  }

  function handleLogout() {
    signOut({
      callbackUrl: "/"
    });
  }

  function handleSidebarToggle() {
    setHideSideBar(!hideSideBar);
  }

  return (
    <div className="w-full absolute h-20 pr-28 py-2 flex items-center bg-white text-red-600">
      {session && (
        <button
          onClick={handleSidebarToggle}
          className="w-16 fixed sm:static flex justify-center items-center">
          <Image src="/icons/sidebar_toggle.svg" alt="Sidebar Toggle" width={24} height={24} />
        </button>
      )}
      <span className="w-full flex justify-center items-center">
        <span className="w-1/3 invisible"></span>
        <Link href="/" className="w-1/3 flex justify-center items-center">
          <Image src="/logo.svg" alt="Reco Logo" width={125} height={31} priority />
        </Link>
        <span className="w-1/3 flex justify-end items-center gap-2 font-semibold underline">
          {session ? (
            <>
              <NotificationFlyMenu notifications={notifications} />
              <button onClick={handleLogout} className="flex place-items-center gap-2">
                <Image src="/icons/logout.svg" alt="Logout Logo" width={24} height={24} />
                Sair
              </button>
            </>
          ) : (
            <>
              <button onClick={handleLogin}>Entrar</button>
              <button className="bg-primary rounded-full py-2 px-10 ml-6 text-white">
                Contato
              </button>
            </>
          )}
        </span>
      </span>
    </div>
  );
}
