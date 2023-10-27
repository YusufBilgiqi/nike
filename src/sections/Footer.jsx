import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="footer-cente lg:max-w-[60%] ">
        <div>
          <img src={footerLogo} alt="nike logo" className="mb-4" />
          <p className="text-slate-400">
            Get shoes ready for the new team at your nearest nike store. Find
            your perfect size in store. Get rewards{" "}
          </p>
        </div>
        <div className="flex  mt-4 mb-4">
          {socialMedia.map((link) => {
            const { src, alt } = link;
            return (
              <a key={alt} className="mr-3">
                <img
                  src={src}
                  alt={alt}
                  className="bg-white rounded-full p-1"
                />
              </a>
            );
          })}
        </div>
        <div className="grid grid-cols-3">
          {/* {footerLinks.map((newlink) => {
          console.log(newlink.title);
          return (
            <div key={newlink.title}>
              <h4 className="text-white mt-4">{newlink.title} </h4>
              <ul>
                {newlink.links.map((singlelink) => {
                  return (
                    <li>
                      <p className="text-white">{singlelink.name} </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })} */}
          {footerLinks.map((titlelinks) => {
            const { title, links } = titlelinks;
            return (
              <div className="title">
                <h3 className="text-white mb-4" key={title}>
                  {title}
                </h3>
                <ul>
                  {links.map((link) => {
                    const { name } = link;
                    return (
                      <li key={name} className="text-slate-400">
                        {name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
