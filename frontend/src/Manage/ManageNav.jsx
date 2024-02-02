import {Container, Tabs} from '@mantine/core';
import * as classes from '../Styles/tabs.modules.css';


const tabs = [
    'Details',
    'Level Up',
    'Summary'
];

export function ManageNav() {

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

export default ManageNav