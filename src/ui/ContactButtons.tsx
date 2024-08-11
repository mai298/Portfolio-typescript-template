import { Link } from "react-scroll";

interface Iprops{

}

export default function ContactButtons({}:Iprops) {
  return (
<>

<Link to="contact"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer">
              <button className="btn btn-lg">Contact Me</button>
              </Link>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>

</>

)
}
