function Footer() {
  return (
    <footer className="footer fixed-bottom bg-dark text-white text-center p-3 border-top border-dark">
      <p>&copy; {new Date().getFullYear()} Flower Classifier</p>
    </footer>
  );
}

export default Footer;  