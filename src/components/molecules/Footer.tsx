
const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div>
            <h1 className="text-2xl font-sans text-blue-700">MORENT</h1>
            <p className="mt-2 text-sm text-gray-500 max-w-xs">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-sm font-semibold mb-2">About</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#">How it works</a></li>
                <li><a href="#">Featured</a></li>
                <li><a href="#">Partnership</a></li>
                <li><a href="#">Business Relation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Community</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#">Events</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Podcast</a></li>
                <li><a href="#">Invite a friend</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Socials</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#">Discord</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-black border-t pt-6 border-gray-200">
          <p>&copy; {new Date().getFullYear()} Morent. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-blue-600">
            Privacy & policy
            </a>
            <a href="#" className="hover:text-blue-600">
              Terms & Conditions
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
