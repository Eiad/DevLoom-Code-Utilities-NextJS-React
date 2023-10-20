function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer text-center">
      <p className="copyrights text-center">
        &copy; {currentYear} DevLoom. All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
