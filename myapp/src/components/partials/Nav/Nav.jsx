const navArr = [
	"Forside",
	"Produkter",
	"Om os",
	"Ledige stillinger",
	"Kontakt os",
];

export const Nav = () => {
	return (
		<nav>
			<ul>
				{navArr.map((nav, key) => {
					return (
						<li key={key}>
							<a href={"/" + nav.replace(/\s+/g, "")}>{nav}</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
