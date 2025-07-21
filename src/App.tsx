@@ .. @@
 import React, { useEffect } from 'react';
+import { useState } from 'react';
 import Header from './components/Header';
 import About from './components/About';
 import Experience from './components/Experience';
 import Skills from './components/Skills';
 import Projects from './components/Projects';
 import Education from './components/Education';
 import Contact from './components/Contact';
 import Footer from './components/Footer';
+import SecurityMessage from './components/SecurityMessage';
+
+type ViewState = 'portfolio' | 'security';
+
+interface SecurityData {
+  contentType: 'details' | 'source';
+  projectTitle: string;
+}

 function App() {
+  const [currentView, setCurrentView] = useState<ViewState>('portfolio');
+  const [securityData, setSecurityData] = useState<SecurityData | null>(null);
+
+  const handleProjectAction = (contentType: 'details' | 'source', projectTitle: string) => {
+    setSecurityData({ contentType, projectTitle });
+    setCurrentView('security');
+    // Scroll to top when navigating to security page
+    window.scrollTo({ top: 0, behavior: 'smooth' });
+  };
+
+  const handleGoBack = () => {
+    setCurrentView('portfolio');
+    // Scroll to projects section
+    setTimeout(() => {
+      const projectsSection = document.getElementById('projects');
+      if (projectsSection) {
+        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
+      }
+    }, 100);
+  };
+
+  const handleGoHome = () => {
+    setCurrentView('portfolio');
+    // Scroll to top
+    window.scrollTo({ top: 0, behavior: 'smooth' });
+  };
+
   useEffect(() => {
@@ .. @@
   }, []);

+  // Render security message page
+  if (currentView === 'security' && securityData) {
+    return (
+      <SecurityMessage
+        contentType={securityData.contentType}
+        projectTitle={securityData.projectTitle}
+        onGoBack={handleGoBack}
+        onGoHome={handleGoHome}
+      />
+    );
+  }
+
+  // Render main portfolio
   return (
     <div className="min-h-screen bg-white">
       <Header />
       <About />
       <Experience />
       <Skills />
-      <Projects />
+      <Projects onProjectAction={handleProjectAction} />
       <Education />
       <Contact />
       <Footer />
     </div>
   );
 }