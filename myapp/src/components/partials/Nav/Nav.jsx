const navArr = [
    "Forside",
    "Produkter",
    "Om os",
    "Ledige stillinger",
    "Kontakt os"
]

export const Nav = () => {
    return (
        <nav>
            {navArr.map((nav, key) => {
                return (
                    <a key={key} href={"/" + nav}>{nav}</a>
                )
            })}
        </nav>
    )
}