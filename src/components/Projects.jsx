import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaCode, FaTimes } from "react-icons/fa";
import yoglioImg from "../assets/Yoglio.png";
import mapleLeafImg from "../assets/MapleLeaf.png";
import devsoulPosImg from "../assets/Devsoul_POS.png";
import spotypharmImg from "../assets/Spotypharm.png";

const projectsData = {
  completed: [
    {
      id: 1,
      title: "Yoglio",
      description:
        "A modern web application built with cutting-edge technologies for enhanced user experience and performance.",
      image: yoglioImg,
      liveLink: "https://dev.yoglio.com",
      githubLink: "https://github.com/example",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      id: 2,
      title: "Maple Fuel",
      description:
        "An innovative platform designed to deliver seamless functionality and intuitive user interface.",
      image: mapleLeafImg,
      liveLink:
        "https://play.google.com/store/apps/details?id=com.maple.maple_fuel_app&pcampaignid=web_share",
      githubLink: "https://github.com/example",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
  ],
  inProgress: [
    {
      id: 3,
      title: "Devsoul POS",
      description:
        "A comprehensive point-of-sale system with advanced features for business management and transaction processing.",
      image: devsoulPosImg,
      technologies: ["React", "Node.js", "PostgreSQL"],
    },
    {
      id: 4,
      title: "Spotypharm",
      description:
        "A specialized pharmaceutical management platform with inventory tracking and prescription management capabilities.",
      image: spotypharmImg,
      technologies: ["React", "Python", "Django"],
    },
  ],
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("completed");
  const [previewImage, setPreviewImage] = useState(null);

  const projects =
    activeTab === "completed"
      ? projectsData.completed
      : projectsData.inProgress;

  const openPreview = (project) => {
    setPreviewImage(project);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-gray-900 rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                activeTab === "completed"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setActiveTab("inProgress")}
              className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                activeTab === "inProgress"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              In Progress
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Project Image */}
              <div
                className="relative h-48 overflow-hidden cursor-pointer"
                onClick={() => openPreview(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {activeTab === "inProgress" && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 z-10">
                    <FaCode className="text-xs" />
                    In Progress
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {activeTab === "completed" ? (
                    <>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-sm"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 font-medium text-sm"
                      >
                        <FaGithub />
                      </a>
                    </>
                  ) : (
                    <div className="w-full text-center text-sm text-gray-500 dark:text-gray-400 italic">
                      Coming soon...
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closePreview}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePreview}
              className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors duration-300 z-10"
              aria-label="Close preview"
            >
              <FaTimes className="text-3xl" />
            </button>

            {/* Preview Image */}
            <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <img
                src={previewImage.image}
                alt={previewImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-6 bg-white dark:bg-gray-900">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  {previewImage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {previewImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
