import Header from "./header";
import Footer from "./footer";

export default function Left() {
    return (
        <div className="
        fixed left-0 top-0 bottom-0 
        flex flex-col justify-between 
        w-[12.5rem]        
        ">
            <Header />
            <Footer />
        </div>
    )
}