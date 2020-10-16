import * as React from 'react';
import { GroupedListBasicExample } from './GroupedList.Basic.Example';

import { IDocPageProps } from 'office-ui-fabric-react/lib/common/DocPage.types';
import { GroupedListCustomExample } from './GroupedList.Custom.Example';
import { GroupedListCustomCheckboxExample } from './GroupedList.CustomCheckbox.Example';

const GroupedListBasicExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/GroupedList/GroupedList.Basic.Example.tsx') as string;
const GroupedListCustomExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/GroupedList/GroupedList.Custom.Example.tsx') as string;
const GroupedListCustomCheckboxExampleCode = require('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/GroupedList/GroupedList.CustomCheckbox.Example.tsx') as string;

export const GroupedListPageProps: IDocPageProps = {
  title: 'GroupedList',
  componentName: 'GroupedList',
  componentUrl:
    'https://github.com/microsoft/fluentui/tree/7.0/packages/office-ui-fabric-react/src/components/GroupedList',
  examples: [
    {
      title: 'GroupedList basic example',
      code: GroupedListBasicExampleCode,
      view: <GroupedListBasicExample />,
    },
    {
      title: 'GroupedList example with custom header and footer',
      code: GroupedListCustomExampleCode,
      view: <GroupedListCustomExample />,
    },
    {
      title: 'GroupedList example with custom checkbox',
      code: GroupedListCustomCheckboxExampleCode,
      view: <GroupedListCustomCheckboxExample />,
    },
  ],
  overview: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/GroupedList/docs/GroupedListOverview.md'),
  bestPractices: require<
    string
  >('!raw-loader!@fluentui/react-examples/src/office-ui-fabric-react/GroupedList/docs/GroupedListBestPractices.md'),
  isHeaderVisible: true,
  isFeedbackVisible: true,
};