import React, { useMemo, type ReactNode } from 'react';
import Code from '@theme-original/MDXComponents/Code';
import CombineTabs from '@site/src/components/Tabs';
import CodeDisplay from '@site/src/components/CodeDisplay';
import type CodeType from '@theme/MDXComponents/Code';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof CodeType>;

function useRender(children: Props['children']) {
  return useMemo(() => {
    try {
      const parsed = JSON.parse(children);
      if (['vue', 'react'].every((v) => v in parsed)) {
        return parsed;
      }
    } catch (e) {}
  }, [children]);
}

function DocCodeBllock(props: Props) {
  console.log(props.config);
  return (
    <CombineTabs
      VueTab={
        <CodeDisplay {...props.config?.vue}>
          {props.config?.vue?.source}
        </CodeDisplay>
      }
      ReactTab={
        <CodeDisplay {...props.config?.react}>
          {props.config?.react?.source}
        </CodeDisplay>
      }
    />
  );
}

export default function CodeWrapper(props: Props): ReactNode {
  const renderDocCodeBlock = useRender(props.children);

  if (renderDocCodeBlock) {
    return <DocCodeBllock {...props} config={renderDocCodeBlock} />;
  }
  return (
    <>
      <Code {...props} />
    </>
  );
}
