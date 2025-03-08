import Image from "next/image";

export function WelcomeToast() {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 pt-0.5">
        <Image
          width={48}
          height={48}
          className="h-12 w-12 rounded-full"
          src="/images/flare.png"
          alt="Perfil"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
      <div className="ml-3 flex-1">
        <p className="text-sm font-medium text-[#F3F9FE]">
          Bem-vindo ao nosso site oficial!
        </p>
        <p className="mt-1 text-sm text-[#BCB099]">
          Pronto para se juntar às lendas?
        </p>
      </div>
    </div>
  );
}
