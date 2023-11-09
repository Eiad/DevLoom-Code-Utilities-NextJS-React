import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom"; // Import ReactDOM

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <p>You are using the demo version of Devloom.</p>
        <p>Please consider buying a license to unlock all features.</p>
        <p>30-day money back guarantee. No question asked.</p>
        <a href="https://get.devloom.net">Buy License</a>
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

function MainMenu({ isMobileView, closeMenu }) {
  const router = useRouter();
  const [isActivated, setIsActivated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Declare the modal state

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const activationStatus = localStorage.getItem("Devloom");
      setIsActivated(activationStatus === "Activated");
    }
  }, []);

  const openModal = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getLinkClass = (path) => {
    return router.pathname === path ? "current-page" : "";
  };

  return (
    <>
      <section className="menu-logo">
        <div className="header-logo">
          <div className="logo-img">
            <Link href="/" onClick={isMobileView ? closeMenu : null}>
              <Image
                src="/logo/devloom-logo-white-side-2.png"
                width={500}
                height={200}
                alt="Devloom logo"
              />
            </Link>
          </div>
        </div>
        <div className={`main-menu demo-access`}>
          <ul>
            <li className={getLinkClass("/")}>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/format-icon.svg"
                    width={20}
                    height={20}
                    alt="Devloom Formatters"
                  />
                  <span>ALL Formatters</span>
                </a>
              </div>
            </li>
            <li className={getLinkClass("/LicenseActivation")}>
              <div>
                <Link
                  href="/LicenseActivation"
                  onClick={isMobileView ? closeMenu : null}
                >
                  <Image
                    src="/icons/license-icon.svg"
                    width={20}
                    height={20}
                    alt="License Details"
                  />
                  {isActivated ? (
                    <span>My License Details</span>
                  ) : (
                    <span>License Activation</span>
                  )}
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-logo">
          <div className="logo-img">
            <Image
              src="/logo/devloom-logo-full-square.png"
              width={500}
              height={500}
              alt="Devloom logo"
            />
          </div>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default MainMenu;
