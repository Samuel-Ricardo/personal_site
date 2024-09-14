import './menu.style.scss';
import { NavMenuContainer } from './container/container.component';
import { NavMenuItem } from './item/item.component';

export const NavMenu = async () => {
  return (
    <NavMenuContainer>
      <ul className="mobile">
        <NavMenuItem index={0} li={{ id: 'home' }} href="/">
          Home
        </NavMenuItem>
        <NavMenuItem li={{ id: 'portfolio' }} href="/portfolio" index={1}>
          Portfolio
        </NavMenuItem>
        <NavMenuItem li={{ id: 'articles' }} href="/articles" index={2}>
          Articles
        </NavMenuItem>
        <NavMenuItem li={{ id: 'jobs' }} href="/jobs" index={3}>
          Works
        </NavMenuItem>
        <NavMenuItem li={{ id: 'journey' }} href="/journey" index={4}>
          Journey
        </NavMenuItem>

        <NavMenuItem li={{ id: 'My World' }} href="/my/world" index={5}>
          My World
        </NavMenuItem>
      </ul>
      <div className="line" />
      <ul>
        <NavMenuItem index={0} li={{ id: 'home' }} href="/">
          Hero
        </NavMenuItem>
        <NavMenuItem index={1} li={{ id: 'about' }} href="/#about-me">
          About
        </NavMenuItem>
        <NavMenuItem index={2} li={{ id: 'techs' }} href="/#techs-section">
          Techs
        </NavMenuItem>
        <NavMenuItem
          index={3}
          li={{ id: 'projects' }}
          href="/#projects-section"
        >
          Projects
        </NavMenuItem>
        <NavMenuItem
          index={4}
          li={{ id: 'articles' }}
          href="/#articles-section"
        >
          articles
        </NavMenuItem>
        <NavMenuItem
          index={5}
          li={{ id: 'experience' }}
          href="/#experience-section"
        >
          Experience
        </NavMenuItem>
        <NavMenuItem
          index={6}
          li={{ id: 'academic-record' }}
          href="/#academic-section"
        >
          Academic Record
        </NavMenuItem>
        <NavMenuItem
          index={7}
          li={{ id: 'testimonials' }}
          href="/#testimonials-section"
        >
          Testimonials
        </NavMenuItem>
        <NavMenuItem index={8} li={{ id: 'contact' }} href="/#contact-section">
          Contact
        </NavMenuItem>
      </ul>

      <div className="line" />
    </NavMenuContainer>
  );
};
