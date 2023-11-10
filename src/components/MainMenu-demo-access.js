import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../app/css/demo-menu.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content text-center">
        <p>You are using the demo version of Devloom.</p>
        <p>Please consider buying a license to unlock all features.</p>
        <p>30-day money back guarantee. No question asked.</p>
        <div className="active-buy-license">
          {" "}
          <Link
            onClick={onClose}
            href="/LicenseActivation"
            className="demo-buy-link border-round"
          >
            <span>License Activation</span>
          </Link>
          <a
            onClick={onClose}
            className="demo-buy-link border-round"
            href="https://get.devloom.net"
            target="blank"
          >
            Buy License
          </a>
        </div>
        <div onClick={onClose} className="modal-close-button">
          <Image
            src="/icons/close-icon.svg"
            width={30}
            height={30}
            alt="License Details"
          />
        </div>
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

            <li className={getLinkClass("/formatters/HTMLFormatter")}>
              <div>
                <Link
                  href="/formatters/HTMLFormatter"
                  onClick={isMobileView ? closeMenu : null}
                >
                  <Image
                    src="/icons/html-icon.svg"
                    width={20}
                    height={20}
                    alt="HTML Formatter"
                  />
                  <span>HTML Formatter</span>
                </Link>
              </div>
            </li>

            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/css-icon.svg"
                    width={20}
                    height={20}
                    alt="CSS Formatter"
                  />
                  <span>CSS Formatter</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/js-icon.svg"
                    width={20}
                    height={20}
                    alt="JavaScript Formatter"
                  />
                  <span>JavaScript Formatter</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/json-file-icon.svg"
                    width={20}
                    height={20}
                    alt="JSON Formatter"
                  />
                  <span>JSON Formatter</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/less-icon.svg"
                    width={20}
                    height={20}
                    alt="LESS Formatter"
                  />
                  <span>LESS Formatter</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/xml-file-icon.svg"
                    width={20}
                    height={20}
                    alt="XML Formatter"
                  />
                  <span>XML Formatter</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/typescript-icon.svg"
                    width={20}
                    height={20}
                    alt="TypeScript Formatter"
                  />
                  <span>TypeScript Formatter</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/file-gql.svg"
                    width={20}
                    height={20}
                    alt="GraphQL Formatter"
                  />
                  <span>GraphQL Formatter</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li className="menu-converters">
              <p>Converters</p>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/convert-icon.svg"
                    width={20}
                    height={20}
                    alt="HTML to JSX"
                  />
                  <span>HTML to JSX</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/convert-icon.svg"
                    width={20}
                    height={20}
                    alt="JSON to YAML"
                  />
                  <span>JSON to YAML</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/convert-icon.svg"
                    width={20}
                    height={20}
                    alt="YAML to JSON"
                  />
                  <span>YAML to JSON</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/base64-icon.svg"
                    width={20}
                    height={20}
                    alt="Base64 Encoder"
                  />
                  <span>Base64 Encoder</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/binary-icon.svg"
                    width={20}
                    height={20}
                    alt="Numer Base Converter"
                  />
                  <span>Numer Base Converter</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/convert-icon.svg"
                    width={20}
                    height={20}
                    alt="YAML to JSON"
                  />
                  <span>String Case Converter</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/html-entity-icon.svg"
                    width={20}
                    height={20}
                    alt="HTML Entity Encoder"
                  />
                  <span>HTML Entity Encoder</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li className="menu-converters">
              <p>Previewers</p>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/html-fill.svg"
                    width={20}
                    height={20}
                    alt="HTML Previewer"
                  />
                  <span>HTML Previewer</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/markdown-fill.svg"
                    width={20}
                    height={20}
                    alt="Markdown Previewer"
                  />
                  <span>Markdown Previewer</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li className="menu-converters">
              <p>Helpful Tools</p>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/lorem-icon.svg"
                    width={20}
                    height={20}
                    alt="Lorem Ipsum Generator"
                  />
                  <span>Lorem Ipsum Generator</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/jwt-icon.svg"
                    width={20}
                    height={20}
                    alt="JWT Debugger"
                  />
                  <span>JWT Debugger</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
              </div>
            </li>
            <li>
              <div>
                <a onClick={openModal}>
                  <Image
                    src="/icons/regex-icon.svg"
                    width={20}
                    height={20}
                    alt="RegExp Tester"
                  />
                  <span>RegExpTester</span>
                  <Image
                    className="lock-icon"
                    src="/icons/lock-icon.svg"
                    width={15}
                    height={15}
                    alt="Devloom Demo"
                  />
                </a>
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
