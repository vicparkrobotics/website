// NOT A COMPONENT; just some shared data
// IDK where to put this -- move somewhere else?

type Page = {
  name: string;
  href?: string;
  submenus?: { name: string; href: string }[];
};

const pages: Page[] = [
  {
    name: "Subteams",
    submenus: [
      { name: "Build and Design", href: "/subteams/build" },
      { name: "Programming", href: "/subteams/programming" },
      { name: "Media", href: "/subteams/media" },
    ],
  },
  { name: "About Us", href: "/about-us" },
  { name: "Blog", href: "/blog" },
  { name: "Awards", href: "/awards" },
  { name: "Community Outreach", href: "/community-outreach" },
  { name: "Resources", href: "/resources" },
];

export default pages;
