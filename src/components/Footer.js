function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer text-center">
      <p className="copyrights text-center">
        Developed by <a target="_blank" href="https://i-ash.com">ASH</a>  &copy; {currentYear} DevLoom. All rights reserved. 
      </p>
    </section>
  );
}

export default Footer;
