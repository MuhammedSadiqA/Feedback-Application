import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-5">

        <div className="row gy-4 mb-4">

          {/* Brand */}
          <div className="col-md-6 col-lg-3">
            <div className="d-flex align-items-center mb-3 gap-2">
              <div className="bg-primary bg-gradient rounded d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                <span className="text-white fw-bold">LT</span>
              </div>
              <div>
                <h5 className="text-white mb-0">Luminar Technolab</h5>
                <small className="text-secondary">Student Feedback</small>
              </div>
            </div>

            <p className="small text-secondary mb-3">
              Empowering educational excellence through meaningful student feedback and data-driven insights.
            </p>

            <div className="d-flex gap-2">
              <a href="#" className="rounded-circle bg-secondary d-flex justify-content-center align-items-center" style={{ width: "36px", height: "36px" }}>
                <Facebook size={18} />
              </a>
              <a href="#" className="rounded-circle bg-secondary d-flex justify-content-center align-items-center" style={{ width: "36px", height: "36px" }}>
                <Twitter size={18} />
              </a>
              <a href="#" className="rounded-circle bg-secondary d-flex justify-content-center align-items-center" style={{ width: "36px", height: "36px" }}>
                <Linkedin size={18} />
              </a>
              <a href="#" className="rounded-circle bg-secondary d-flex justify-content-center align-items-center" style={{ width: "36px", height: "36px" }}>
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="col-md-6 col-lg-3">
            <h6 className="text-white mb-3">Product</h6>
            <ul className="list-unstyled text-secondary small">
              <li><a className="text-secondary text-decoration-none d-block mb-2" href="#features">Features</a></li>
              <li><a className="text-secondary text-decoration-none d-block mb-2" href="#">Pricing</a></li>
              <li><a className="text-secondary text-decoration-none d-block mb-2" href="#">Case Studies</a></li>
              <li><a className="text-secondary text-decoration-none d-block mb-2" href="#">Reviews</a></li>
              <li><a className="text-secondary text-decoration-none d-block mb-2" href="#">Updates</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-6 col-lg-3">
            <h6 className="text-white mb-3">Company</h6>
            <ul className="list-unstyled text-secondary small">
              <li><a className="text-secondary text-decoration-none d-block mb-2" href="#about">About Us</a></li>
              <li><a className="text-secondary text-decoration-none d-block mb-2" href="#">Careers</a></li>
              <li><a className="text-secondary text-decoration-none d-block mb-2" href="#">Blog</a></li>
              <li><a className="text-secondary text-decoration-none d-block mb-2" href="#">Press</a></li>
              <li><a className="text-secondary text-decoration-none d-block mb-2" href="#">Partners</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-6 col-lg-3">
            <h6 className="text-white mb-3">Contact Us</h6>
            <ul className="list-unstyled small text-secondary">
              <li className="d-flex align-items-start gap-2 mb-2">
                <Mail size={16} />
                <span>luminartechnolab@gmail.com</span>
              </li>
              <li className="d-flex align-items-start gap-2 mb-2">
                <Phone size={16} />
                <span>+91 987 765 2891</span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <MapPin size={16} />
                <span>Kerala Kochi , Kakkanad, Pincode 12345</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-top border-secondary pt-3">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-secondary">
            <p className="mb-2 mb-md-0">&copy; 2024 Luminar Technolab. All rights reserved.</p>

            <div className="d-flex gap-3">
              <a href="#" className="text-secondary text-decoration-none">Privacy Policy</a>
              <a href="#" className="text-secondary text-decoration-none">Terms of Service</a>
              <a href="#" className="text-secondary text-decoration-none">Cookie Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
