export default function Footer() {
    return (
        <footer className="
            flex flex-col justify-center items-center gap-5
            h-1/6 pb-[90px]
            tablet:fixed tablet:bottom-0 tablet:left-4 tablet:pb-4
            laptop:fixed laptop:bottom-0 laptop:left-8 laptop:pb-4">
            <h2 className="font-bold">Connect with me!</h2>
            <nav>
                <ul className="flex flex-row gap-2">
                    <li><a href="https://www.linkedin.com/in/kakikagatan/" target="_blank"><img src="/assets/icons/linkedin-icon.svg" alt="linkedin icon" /></a></li>
                    <li><a href="https://github.com/kaykki" target="_blank"><img src="/assets/icons/github-icon.svg" alt="github icon" /></a></li>
                    <li><a href="mailto:kakikagatan@outlook.com" target="_blank"><img src="/assets/icons/email-icon.svg" alt="email icon" /></a></li>
                </ul>
            </nav>
            <p className="text-xs">&#169; 2024 Kaki Kagatan</p>
        </footer>
    )
}