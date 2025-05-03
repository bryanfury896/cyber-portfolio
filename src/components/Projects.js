import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projectData = [
	{
		title: 'Red Team Simulation',
		description: 'Simulated APT attack against corporate infrastructure.',
		tools: ['Metasploit', 'Empire', 'BloodHound'],
	},
	{
		title: 'Web App Pentest',
		description: 'Discovered and reported XSS, SQLi in production apps.',
		tools: ['Burp Suite', 'SQLMap', 'Nmap'],
	},
];

const Projects = () => {
	const [selected, setSelected] = useState(null);

	return (
		<motion.section
			className="py-16 bg-gray-900 text-white text-center"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<h2 className="text-3xl font-bold mb-8 text-green-400">Projects</h2>
			<motion.div
				className="flex justify-center gap-6 flex-wrap"
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: {
							staggerChildren: 0.3,
						},
					},
				}}
			>
				{projectData.map((project, index) => (
					<motion.div
						key={index}
						onClick={() => setSelected(project)}
						className="project-card"
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<h3 className="text-xl font-semibold text-green-300">
							{project.title}
						</h3>
						<p className="text-gray-400 text-sm mt-2">
							Click to see more
						</p>
					</motion.div>
				))}
			</motion.div>

			{selected && (
				<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
					<div className="bg-gray-800 p-8 rounded-lg w-96 relative shadow-2xl">
						<button
							className="absolute top-2 right-2 text-gray-400 hover:text-white"
							onClick={() => setSelected(null)}
						>
							X
						</button>
						<h3 className="text-2xl font-bold text-green-300">
							{selected.title}
						</h3>
						<p className="text-gray-300 mt-2">{selected.description}</p>
						<ul className="mt-4 text-sm text-gray-400 list-disc list-inside">
							{selected.tools.map((tool, i) => (
								<li key={i}>{tool}</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</motion.section>
	);
};

export default Projects;