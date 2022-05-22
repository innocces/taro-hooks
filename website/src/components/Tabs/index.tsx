import React, { useMemo } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

export const CodeTabs = ({ children, ...props }) => {
  return (
    <Tabs groupId="codeExample" {...props}>
      {children}
    </Tabs>
  );
};

export const CodeTabItem = ({
  children,
  value,
  title = '示例代码',
  language,
  codeBlockProps = {},
  ...props
}) => {
  const codeContent = useMemo(() => {
    if (children) {
      // 直接``` 有点问题。 这里自己转一下吧
      const escapeReturn = children.replace(/\n/, '');
      const arrayChildren = escapeReturn.split('\n');
      // 基本都是第一行有多出来的空格。 这里直接replace一下
      const indentSpaceNum = arrayChildren[0].match(/^\s*/)[0].length;
      const escapeSpaceArrayChildren = arrayChildren.map((item) => {
        return item.replace(new Array(indentSpaceNum).fill(' ').join(''), '');
      });
      return escapeSpaceArrayChildren.join('\n');
    }
    return '';
  }, [children]);
  return (
    <TabItem value={value} {...props}>
      <CodeBlock
        language={language ?? 'jsx'}
        title={title}
        showLineNumbers
        {...codeBlockProps}
      >
        {codeContent}
      </CodeBlock>
    </TabItem>
  );
};
