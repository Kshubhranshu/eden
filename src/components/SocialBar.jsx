const SocialBar = () => {
    return (
        <div className="fixed left-0 top-[50%] z-50 lg:flex flex-col bg-eden-dark">
            {/* Facebook */}
            <a
                href="https://www.facebook.com/profile.php?id=61577096236840"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-[#1877F2] opacity-100 isolate z-50"
                aria-label="Facebook"
            >
                <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/color/48/facebook-new.png"
                    alt="facebook-new"
                />
            </a>

            {/* Instagram */}
            <a
                href="https://www.instagram.com/eden_wellness_hospitality/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-[#E1306C]"
                aria-label="Instagram"
            >
                <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/fluency/48/instagram-new.png"
                    alt="instagram-new"
                />
            </a>

            {/* TripAdvisor */}
            <a
                href="https://www.tripadvisor.in/Hotel_Review-g23875250-d32950333-Reviews-Eden_Wellness_Hospitality-Salan_Gaon_Dehradun_District_Uttarakhand.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-[#0A66C2]"
                aria-label="LinkedIn"
            >
                <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/doodle/40/tripadvisor.png"
                    alt="tripadvisor"
                />
            </a>

            {/* WhatsApp
      <a
        href="https://wa.me/XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-[#25D366]"
        aria-label="WhatsApp"
      >
        <img width="24" height="24" src="https://img.icons8.com/ios/50/FFFFFF/whatsapp--v1.png" alt="whatsapp--v1"/>
      </a> */}
        </div>
    );
};

export default SocialBar;
