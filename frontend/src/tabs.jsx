import {Container, Tabs} from '@mantine/core';
import classes from './Styles/SectionNav.module.css';


const tabs = [
    'Home',
    'Build',
    'Shop',
    'Manage',
];

export function SectionNav() {

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container size="md">
        <Tabs
          defaultValue="Start"
          variant="outline"
          visibleFrom="sm"
          classNames={{
            root: classes.tabs,
            list: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
}

export default SectionNav