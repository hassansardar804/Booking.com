const Footer = () => {
    return (
      <footer className="py-8 text-white bg-gray-900">
        <div className="container flex flex-wrap justify-between mx-auto">
          
          {/* Logo and About */}
          <div className="w-full mb-6 md:w-1/3">
            <h2 className="text-lg font-semibold">Your Company</h2>
            <p className="mt-4 text-gray-400">
              We provide reliable bus booking services with the best travel experience.
            </p>
          </div>
  
          {/* Quick Links */}
          <div className="w-full mb-6 md:w-1/3">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:underline">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:underline">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:underline">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:underline">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div className="w-full mb-6 md:w-1/3">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <ul className="mt-4 space-y-2">
              <li><span className="text-gray-400">Email:</span> info@yourcompany.com</li>
              <li><span className="text-gray-400">Phone:</span> +123 456 7890</li>
              <li><span className="text-gray-400">Address:</span> 123 Main Street, City, Country</li>
            </ul>
          </div>
        </div>
  
        {/* Social Media and Copyright */}
        <div className="container pt-6 mx-auto mt-8 text-center border-t border-gray-700">
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
          </div>
          <p className="mt-4 text-gray-500">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  