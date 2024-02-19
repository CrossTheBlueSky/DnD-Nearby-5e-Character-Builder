import {Container, Tabs} from '@mantine/core';
import * as classes from '../Styles/tabs.modules.css';
import {useNavigate} from 'react-router-dom';

const tabs = [
    'Create New',
    'Load Existing',
]

function StartNav() {

    const navigate = useNavigate();

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab} onClick={()=>navigate("/build")}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container size="md">
        <Tabs c="gray.5"
          defaultValue="Equipment"
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

export default StartNav