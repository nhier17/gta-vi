import Image from "next/image";

export default function Navbar() {
    return (
        <nav>
            <Image src="/images/nav-logo.svg" alt="Logo" width={32} height={32} />
            <Image src="/images/menu.svg" alt="Menu" width={32} height={32} />
        </nav>
    );
}