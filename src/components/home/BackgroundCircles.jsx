

const BackgroundCircles = () => {
  return (
    <section className="overflow-x-hidden animate-pulse">
      <div className="absolute top-1/2 left-1/2 w-300 aspect-square border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-240 aspect-square border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-180 aspect-square border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-120 aspect-square border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-60 aspect-square border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
};

export default BackgroundCircles;