export const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold">LinguaExpert</span>
            </div>
            <p className="text-gray-300">
              Expert language training for personal and professional growth.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Group Classes</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">1-on-1 Training</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Intensive Courses</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Free Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Languages</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Spanish</li>
              <li>French</li>
              <li>German</li>
              <li>Italian</li>
              <li>And 11 more...</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>hello@linguaexpert.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Online & San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 LinguaExpert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};