export const Banner = (): JSX.Element => {
  return (
    <section className="relative border-y border-white/20 bg-primary bg-black">
      <div className="mx-auto flex min-h-[240px] items-center justify-center gap-6 sm:min-h-[380px]">
        {/* Logo */}
        <img src="/logo-black.svg" alt="" className="h-16 w-auto sm:h-36" />
        <h1
          className="
              font-black leading-none text-black
              text-[64px]
              sm:text-[96px]
              md:text-[140px]
              lg:text-[140px] space-x-6
            "
        >
          Feeling mad yet?
        </h1>
      </div>
    </section>
  );
};