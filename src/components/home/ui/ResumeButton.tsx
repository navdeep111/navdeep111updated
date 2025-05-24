// import LocalConfig from "@/constants/config";
// import Link from "next/link";

// const ResumeButton = () => {
//   return (
//     <Link
//       className="app__outlined_btn min-w-[12rem]"
//       href={LocalConfig.values.NEXT_PUBLIC_RESUME_LINK}
//       target="_blank"
//     >
//       Download Resume
//     </Link>
//   );
// };

// export default ResumeButton;
// import LocalConfig from "@/constants/config";
// import Link from "next/link";

// const ResumeButton = () => {
//   return (
//     <Link
//       className="app__outlined_btn min-w-[12rem]"
//       href={LocalConfig.values.NEXT_PUBLIC_RESUME_LINK}
//       target="_blank"
//     >
//       Download Resume
//     </Link>
//   );
// };

// export default ResumeButton;
import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[12rem]"
      href="/resume/Resume.pdf" // Direct path to the PDF in the public folder
      download="Gajraj_Singh_Resume_8875128367.pdf" // Custom file name for the download
      target="_blank" // Optionally opens in a new tab
      rel="noopener noreferrer" // Security feature with target="_blank"
    >
      Download Resume
    </Link>
  );
};

export default ResumeButton;

