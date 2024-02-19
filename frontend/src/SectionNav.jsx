import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import * as classes from './Styles/SectionNav.modules.css';
import { useNavigate } from 'react-router-dom';
const links = [
  { link: '/', label: 'Start' },
  { link: '/build', label: 'Build' },
  { link: '/shop', label: 'Shop' },
  { link: '/manage', label: 'Manage' },
];

function SectionNav() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const navigate = useNavigate();

  const items = links.map((link) => (
    <a style={{color: '#BBCEA8'}}
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(e) => {
        e.preventDefault();
        navigate(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={50} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}

export default SectionNav