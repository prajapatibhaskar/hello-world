import Link from "next/link";

const About = () => {
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1>About Us</h1>
                <br />
                <Link href={"/about/aboutcollege"}>About College</Link>
                <br /> <br />
                <Link href={"/about/aboutstaff"}>About Staff</Link>
            </div>
        </main>
    )
}

export default About;