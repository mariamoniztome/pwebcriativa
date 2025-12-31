export const Banner = (): JSX.Element => {
  return (
    <section className="relative border-y border-neutral-100 bg-primary bg-black">
      <div className="mx-auto flex min-h-[240px]  items-center justify-center gap-6  sm:min-h-[300px]">
        {/* Logo */}
        <img
          src="/logo-black.svg"
          alt=""
          className="h-16 w-auto sm:h-20"
        />

        {/* Text */}
        <div>
          Feeling mad yet?
        </div>
      </div>
    </section>
  );
};
