@@ .. @@
 import React from 'react';
 import { ExternalLink, Github, Smartphone, ShoppingCart, Zap, Users } from 'lucide-react';

-const Projects = () => {
+interface ProjectsProps {
+  onProjectAction: (contentType: 'details' | 'source', projectTitle: string) => void;
+}
+
+const Projects: React.FC<ProjectsProps> = ({ onProjectAction }) => {
   const projects = [
@@ .. @@
                   <div className="flex gap-4 mt-8 pt-6 border-t border-white">
-                    <button className={`flex items-center gap-2 px-6 py-3 ${colors.button} text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-200`}>
+                    <button 
+                      onClick={() => onProjectAction('details', project.title)}
+                      className={`flex items-center gap-2 px-6 py-3 ${colors.button} text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-200`}
+                    >
                       <ExternalLink size={16} />
                       <span>View Details</span>
                     </button>
-                    <button className="flex items-center gap-2 px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-slate-300">
+                    <button 
+                      onClick={() => onProjectAction('source', project.title)}
+                      className="flex items-center gap-2 px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-slate-300"
+                    >
                       <Github size={16} />
                       <span>Source Code</span>
                     </button>