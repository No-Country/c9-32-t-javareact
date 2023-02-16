const Footer = () => {
	const navItems = ['Servicios', 'Empresas', 'Lorem', 'Ipsum'];

	return (
		<footer className="footer">
			<div>
				<h2 className="font-roboto font-bold text-2xl tracking-wide">
					DustBusters
				</h2>
				<p>Copyright 2023</p>
			</div>
			<div className="flex gap-6 md:gap-20">
				<div>
					<h3 className="footer__nav-title ">Website</h3>
					<ul>
						<li>Ofertas</li>
						<li>Precios</li>
						<li>Nosotros</li>
					</ul>
				</div>
				<div className="pb-10">
					<h3 className="footer__nav-title ">Contacto</h3>
					<ul>
						<li>Email</li>
						<li>Twitter</li>
					</ul>
				</div>
			</div>
			<div>
				<h3 className="footer__nav-title ">Legal</h3>
				<ul>
					<li>Politica de privacidad</li>
					<li>Terminos y condiciones</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
