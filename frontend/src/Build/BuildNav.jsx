import {Container, Tabs} from '@mantine/core';
import * as classes from '../Styles/tabs.modules.css';
import {useDispatch} from 'react-redux';
import {setBuildTab} from './buildTabSlice';

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
  const dispatch = useDispatch();

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab} onClick={(tab)=>dispatch(setBuildTab(tab.target.outerText))}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container bg="" mx="0" px="0" size="md">
        <Tabs 
          c="gray.5"
          bg=""
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