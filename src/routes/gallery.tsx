import { createFileRoute } from "@tanstack/react-router";
import img1 from "../assets/gallery/TimePhoto_20260123_122334.jpg";
import img2 from "../assets/gallery/TimePhoto_20260123_131851.jpg";
import img3 from "../assets/gallery/TimePhoto_20260123_122803.jpg";
import img4 from "../assets/gallery/TimePhoto_20260123_123138.jpg";
import img5 from "../assets/gallery/TimePhoto_20260123_124547.jpg";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
});

const evidence = [
  {
    title: "Government Office Entrance",
    image: img1,
    observation:
      "Main entrance of the government office visited for contextual inquiry.",
    insight:
      "First impressions and navigation begin at the entrance. Clear guidance is essential.",
    severity: "Low",
  },
  {
    title: "Unattended Entrance",
    image: img2,
    observation:
      "No security guard or help desk was available at the entrance.",
    insight:
      "Visitors may struggle to understand where to go or whom to approach.",
    severity: "Medium",
  },
  {
    title: "Information Board",
    image: img3,
    observation:
      "Building directory is primarily in Gujarati with limited support for other users.",
    insight:
      "Multilingual signage improves accessibility and reduces confusion.",
    severity: "High",
  },
  {
    title: "Wayfinding Map",
    image: img4,
    observation:
      "No detailed map of the premises was available.",
    insight:
      "A floor map near the entrance could significantly improve navigation.",
    severity: "High",
  },
  {
    title: "Waiting Area",
    image: img5,
    observation:
      "Limited seating available for visitors waiting for their turn.",
    insight:
      "Comfortable waiting areas improve overall service experience.",
    severity: "Medium",
  },
];

function Gallery() {
  return (
    <main className="min-h-screen bg-[#f7f2e8] py-16 px-10">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="uppercase tracking-[0.35em] text-sm text-stone-500">
            Investigation Archive
          </p>

          <h1 className="text-6xl font-serif mt-2">
            Field Evidence
          </h1>

          <p className="mt-5 max-w-3xl text-stone-600 leading-8">
            During contextual inquiry and field visits, several usability
            issues were documented through photographs and observations.
            These findings later informed the design decisions and service
            improvements proposed in the project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {evidence.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[420px] object-cover"
              />

              <div className="p-8">

                <div className="flex justify-between items-center">

                  <h2 className="text-3xl font-serif">
                    {item.title}
                  </h2>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.severity === "High"
                        ? "bg-red-100 text-red-700"
                        : item.severity === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.severity}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-stone-800">
                    Observation
                  </h3>

                  <p className="mt-2 text-stone-600 leading-7">
                    {item.observation}
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-stone-800">
                    UX Insight
                  </h3>

                  <p className="mt-2 text-stone-600 leading-7">
                    {item.insight}
                  </p>
                </div>

              </div>
            </article>
          ))}

        </div>
      </div>
    </main>
  );
}