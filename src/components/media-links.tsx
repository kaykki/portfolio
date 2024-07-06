export default function MediaLinks() {
    return (
        <nav>
            <ul className="
                w-[75px] h-[200px]
                bg-teal-900
                rounded-[15px]
                fixed right-[55px] top-0 bottom-0
                flex flex-col gap-2 justify-center items-center">
                <li><a href="https://www.linkedin.com/in/kakikagatan/" target="_blank"><img src="/assets/icons/linkedin-icon.svg" alt="linkedin icon" /></a></li>
                <li><a href="https://github.com/kaykki" target="_blank"><img src="/assets/icons/github-icon.svg" alt="github icon" /></a></li>
                <li><a href="mailto:kakikagatan@outlook.com" target="_blank"><img src="/assets/icons/email-icon.svg" alt="email icon" /></a></li>
            </ul>
        </nav>
    )
}