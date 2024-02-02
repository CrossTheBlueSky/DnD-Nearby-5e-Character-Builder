import {Container, Tabs} from '@mantine/core';
import * as classes from '../Styles/tabs.modules.css';


const tabs = [
    'Class',
    'Race',
    'Background',
    'Ability Scores',
    'Skills',
    'Feats',
    'Retraining',
];

function BuildNav() {

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container size="md">
        <Tabs
          defaultValue="Class"
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

export default BuildNav