const FEATURES_MAP = [
  {
    label: "Global Event",
    description: "Stable & high-speed internet",
    icon: "/assets/images/icons/3dcube.svg",
  },
  {
    label: "Extra Snacks",
    description: "Stable & high-speed internet",
    icon: "/assets/images/icons/coffee.svg",
  },
  {
    label: "Sustainbility",
    description: "Stable & high-speed internet",
    icon: "/assets/images/icons/3dcube.svg",
  },
];

export default function OfficeFeatures({ features }: { features: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">
      {features.map((feature) => {
        const matched = FEATURES_MAP.find((f) => f.label === feature);

        if (!matched) return null;
        return (
          <div key={feature} className="flex items-center gap-4">
            <img
              src={matched.icon}
              width={34}
              height={34}
              alt={`${matched.label} icon`}
            />
            <div className="flex flex-col gap-[2px]">
              <p className="font-bold text-lg leading-[24px]">
                {matched.label}
              </p>
              <p className="text-sm leading-[21px]">{matched.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
