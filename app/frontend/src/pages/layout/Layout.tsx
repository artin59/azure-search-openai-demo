import React, { useState, useRef, RefObject } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Layout.module.css";
import sparklePng from "../../assets/sparkle.png";
import Image from "../../assets/backgroundimg.png";

const Layout = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [layoutVisible, setLayoutVisible] = useState(false); // Tracks visibility
    const menuRef: RefObject<HTMLDivElement> = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleToggle = () => {
        setLayoutVisible(!layoutVisible);
    };

    return (
        <section className={styles.back} style={{ backgroundImage: `url(${Image})` }}>
            <button className={styles.toggleButton} onClick={handleToggle}>
                <img src={sparklePng} alt="Toggle Layout" className={styles.sparkleIcon} />
            </button>

            <div
                className={`${styles.layout} ${layoutVisible ? styles.layoutVisible : ""}`}
            >
                <header className={styles.header} role={"banner"}>
                    <div className={styles.headerContainer} ref={menuRef}>
                        <Link to="/" className={styles.headerTitleContainer}>
                            <h3 className={styles.headerTitle}>
                                {t("headerTitle")}
                                <img
                                    src={sparklePng}
                                    alt="Sparkle icon"
                                    style={{ width: "24px", height: "24px", marginLeft: "8px" }}
                                />
                            </h3>
                        </Link>
                        <nav>
                            <ul
                                className={`${styles.headerNavList} ${menuOpen ? styles.show : ""}`}
                            >
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? styles.headerNavPageLinkActive
                                                : styles.headerNavPageLink
                                        }
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {t("chat")}
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <Outlet />
            </div>
        </section>
    );
};

export default Layout;
