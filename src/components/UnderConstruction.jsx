import { Wrench, Clock } from "lucide-react";

const UnderConstruction = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 -mt-8">
      
      {/* Background Accent */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gray-100 blur-3xl" />
      </div>

      {/* Content */}
      <div className="max-w-lg text-center z-10">
        
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 border border-blue-100">
          <Wrench className="h-8 w-8 text-blue-600 animate-pulse" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
          Website Under Construction
        </h1>

        {/* Description */}
        <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
          We’re currently working on something exciting.
          <br/>
          This page will be available very soon <br/>
          Stay tuned.
        </p>

        {/* Status */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm">
          <Clock className="h-4 w-4" />
          Launching soon
        </div>

        {/* Divider */}
        <div className="mx-auto mt-10 h-[2px] w-24 rounded-full bg-blue-600" />
      </div>
    </main>
  );
};

export default UnderConstruction;