import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const socialIcons = [
  { icon: FaFacebookF, link: "#!" },
  { icon: FaDribbble, link: "#!" },
  { icon: FaInstagram, link: "#!" },
  { icon: FaLinkedinIn, link: "#!" },
  { icon: FaBehance, link: "#!" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => {
    const IconComponent = item.icon;
    return (
      <a
        href={item.link}
        className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
        key={index}
      >
        <IconComponent
          className={`text-xl w-4.5 aspect-square`}
        />
      </a>
    );
  });
};

export default SocialMedia;