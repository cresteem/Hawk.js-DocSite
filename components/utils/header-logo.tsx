import HawkLogo from "./hawk-logo";

export default function HeaderLogo() {
  return (
    <div className="flex justify-center items-center">
      <HawkLogo className="text-primary" w={35} h={35} />
      <p className="font-bold ml-2 text-xl text-primary tracking-widest pointer-events-none">
        Hawk.js
      </p>
    </div>
  );
}
