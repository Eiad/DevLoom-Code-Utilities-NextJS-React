import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MainMenu({ isMobileView, closeMenu }) {
  const router = useRouter();
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const activationStatus = localStorage.getItem("Devloom");
      setIsActivated(activationStatus === "Activated");
    }
  }, []);

  const navigateAndRefresh = (url) => {
    // If mobile view, close the menu first.
    if (isMobileView && closeMenu) {
      closeMenu();
    }
    // Next.js router push followed by window location reload.
    router.push(url).then(() => window.location.reload());
  };

  const getLinkClass = (path) => {
    return router.pathname === path ? "current-page" : "";
  };

  return (
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
      <div
        className={`main-menu ${isActivated ? "full-access" : "demo-access"}`}
      >
        <ul>
          <li className={getLinkClass("/")}>
            <div>
              <Link href="/" onClick={isMobileView ? closeMenu : null}>
                <Image
                  src="/icons/format-icon.svg"
                  width={20}
                  height={20}
                  alt="Devloom Formatters"
                />
                <span>ALL Formatters</span>
              </Link>
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
  );
}

export default MainMenu;
