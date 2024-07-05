export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center h-1/6 shadow-footer">
            <nav>
                <ul className="flex flex-row gap-1">
                    <li><a href=""><img src="/assets/icons/linkedin-icon.svg" alt="linkedin icon" /></a></li>
                    <li><a href=""><img src="/assets/icons/github-icon.svg" alt="github icon" /></a></li>
                    <li><a href=""><img src="/assets/icons/email-icon.svg" alt="email icon" /></a></li>
                </ul>
            </nav>
            <p>&#169; 2024 Kaki Kagatan</p>
        </footer>
    )
}