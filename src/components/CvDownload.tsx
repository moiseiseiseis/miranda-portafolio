import { Download } from "lucide-react";

const CV_FILES = [
  { label: "Descargar CV", href: "/cv/CV_Moises_Alberto_Garcia_Miranda.pdf" },
  { label: "English", href: "/cv/CV_Moises_Alberto_Garcia_Miranda_EN.pdf" },
];

export default function CvDownload() {
  return (
    <div className="inline-flex items-stretch overflow-hidden rounded-full border border-white/10 bg-white/[0.03] text-white">
      {CV_FILES.map((file, i) => (
        <a
          key={file.href}
          href={file.href}
          download
          className={`inline-flex items-center gap-2 px-6 py-4 font-medium transition-colors hover:bg-white/10 ${
            i > 0 ? "border-l border-white/10 text-slate-300" : ""
          }`}
        >
          {i === 0 && <Download size={18} />}
          {file.label}
        </a>
      ))}
    </div>
  );
}
